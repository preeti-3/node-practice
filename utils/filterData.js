function filterSalonsData(day, time, res, skip, limit, service, staff, salon) {
    // Validate day
    const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    if (day && !validDays.includes(day.toLowerCase())) {
        return res.status(400).json({ error: `Invalid day: "${day}". Please provide a valid day (e.g., Monday, Tuesday).` })
    }

    if (skip && isNaN(parseInt(skip))) {
        return res.status(400).json({ error: `skip must be a Number` })
    }

    if (limit && isNaN(limit)) {
        return res.status(400).json({ error: `limit must be a Number` })
    }

    if (service && (typeof service !== "string" || service.trim() === "" || !isNaN(service))) {
        return res.status(400).json({ error: `Service must be a string value` })
    }
    if (staff && (typeof staff !== "string" || staff.trim() === "" || !isNaN(staff))) {
        return res.status(400).json({ error: `Staff must be a string value` })
    }
    if (salon && (typeof salon !== "string" || salon.trim() === "" || !isNaN(salon))) {
        return res.status(400).json({ error: `salon must be a string value` })
    }

    // Validate time
    const isValidTime = (timeStr) => {
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // Matches 24-hour format (e.g., 23:59)
        return timeRegex.test(timeStr);
    };

    if (time && !isValidTime(time)) {
        return res.status(400).json({ error: `Invalid time: "${time}". Please provide time in 24-hour format (e.g., 14:30).` })
    }
}

module.exports = filterSalonsData