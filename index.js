const express = require('express')
const db = require('./db')
const siteUnderConstruction = require('./middlewares/site-under-construction.middleware')
const serviceUnavailable = require('./middlewares/service-unavailable.middleware')
const salons = require('./db/salon')
const filterSalonsData = require('./utils/filterData')
const compression = require('compression')
const app = express()

app.get('/movies', serviceUnavailable, (req, res) => {
    try {
        const { skip = 0, limit = 150, search, language, actor, category, sort = "asc", isAvailable, sortBy } = req.query
        const skipInt = parseInt(skip)
        const limitInt = parseInt(limit)

        let result = db.slice(skipInt, skipInt + limitInt)
        if (search) {
            result = result.filter(item =>
                Object.values(item)
                    .filter(value => typeof value === "string")
                    .some(value => value.toLowerCase().includes(search.toLowerCase()))
            );
        }

        if (language) {
            result = result.filter(item => item.language.toLowerCase().includes(language.toLowerCase())
            );
        }

        if (category) {
            result = result.filter(item => item.category.toLowerCase().includes(category.toLowerCase())
            );
        }
        if (actor) {
            result = result.filter(item => item.actor.toLowerCase().includes(actor.toLowerCase())
            );
        }
        if (sort) {
            result = result.sort((a, b) => {
                const aValue = a[sortBy];
                const bValue = b[sortBy];

                if (typeof aValue === "string" && typeof bValue === "string") {

                    return sort === "asc"
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                } else if (typeof aValue === "number" && typeof bValue === "number") {
                    return sort === "asc" ? aValue - bValue : bValue - aValue;
                }

                return 0;
            });
        }
        if (isAvailable) {
            result = result.filter(item => { return isAvailable === 'true' ? item.isAvailable === true : item.isAvailable === false })
        }

        return res.status(200).json({ data: result })
    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
})

app.get("/route1", siteUnderConstruction, serviceUnavailable, (req, res) => {
    return res.status(200).json({ message: "route 1...." })
})
app.use(compression());
app.get("/salons", siteUnderConstruction, (req, res) => {
    try {
        const { skip = 0, limit = 100, sort = "asc", sortBy = "rating", salon, service, staff, day, time } = req.query
        let result = salons
        // pagination
        const skipInt = parseInt(skip)
        const limitInt = parseInt(limit)
        result = result.slice(skipInt, skipInt + limitInt)
        filterSalonsData(day, time, res, skip, limit, service, staff, salon)
        // sorting 
        if (sort) {
            result = result.sort((a, b) => {
                const aValue = a[sortBy];
                const bValue = b[sortBy];

                if (typeof aValue === "string" && typeof bValue === "string") {

                    return sort === "asc"
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                } else if (typeof aValue === "number" && typeof bValue === "number") {
                    return sort === "asc" ? aValue - bValue : bValue - aValue;
                }

                return 0;
            });
        }

        // filter salon
        if (salon) {
            result = result.filter(item => item.name.toLowerCase().includes(salon))
        }

        // service available
        if (service) {
            result = result.filter(item => item.services.some(value => value.toLowerCase().includes(service)))
        }

        //  staff available
        if (staff) {
            result = result.filter(item => item.staff.some(value => value.name.toLowerCase().includes(staff)))
        }

        if (day) {
            result = result.filter(item => item.openDays.some(value => value.toLowerCase().includes(day)))
        }

        if (time) {
            result = result.filter((salon) => {
                // Parse the start time, end time, and input time into hours and minutes
                const parseTime = (timeStr) => {
                    const [hours, minutes] = timeStr.split(":").map(Number);
                    return { hours, minutes: minutes || 0 };
                };

                const { hours: startHours, minutes: startMinutes } = parseTime(salon.startTime);
                const { hours: endHours, minutes: endMinutes } = parseTime(salon.endTime);
                const { hours: inputHours, minutes: inputMinutes } = parseTime(time);

                // Convert times into total minutes
                const startTimeInMinutes = startHours * 60 + startMinutes;
                const endTimeInMinutes = endHours * 60 + endMinutes;
                const inputTimeInMinutes = inputHours * 60 + inputMinutes;

                return inputTimeInMinutes >= startTimeInMinutes && inputTimeInMinutes <= endTimeInMinutes;
            });
        }


        return res.status(200).json({ data: result, count: result.length })
    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
})


app.listen(3001, () => {
    console.log("server is running on port 3001")
})