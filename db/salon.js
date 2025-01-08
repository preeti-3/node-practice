const salons = [
    {
        name: "Glamour Studio",
        services: ["Haircut", "Hair Coloring", "Facial", "Manicure", "Pedicure"],
        staff: [
            { name: "Sophia", role: "Hair Stylist", timings: "10:00 - 18:00" },
            { name: "Emma", role: "Beautician", timings: "11:00 - 19:00" },
        ],
        startTime: "10:00",
        endTime: "20:00",
        openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        rating: 4.5,
    },
    {
        name: "Elegance Lounge",
        services: ["Haircut", "Waxing", "Massage", "Bridal Makeup"],
        staff: [
            { name: "Ava", role: "Hair Stylist", timings: "9:00 - 15:00" },
            { name: "Mia", role: "Massage Therapist", timings: "10:00 - 17:00" },
        ],
        startTime: "9:00",
        endTime: "17:00",
        openDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        rating: 4.8,
    },
    {
        name: "Luxury Glow",
        services: ["Facial", "Hair Spa", "Body Polishing", "Threading"],
        staff: [
            { name: "Ella", role: "Beautician", timings: "10:00 - 15:00" },
            { name: "Noah", role: "Hair Spa Specialist", timings: "11:00 - 19:00" },
        ],
        startTime: "10:00",
        endTime: "20:00",
        openDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
        rating: 4.2,
    },
    {
        name: "Blissful Beauty",
        services: ["Waxing", "Facial", "Bridal Makeup", "Manicure"],
        staff: [
            { name: "Chloe", role: "Beautician", timings: "9:30 - 16:30" },
            { name: "Sophia", role: "Makeup Artist", timings: "11:00 - 19:00" },
        ],
        startTime: "9:00",
        endTime: "19:00",
        openDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
        rating: 4.0,
    },
    {
        name: "Urban Trends",
        services: ["Haircut", "Hair Coloring", "Facial", "Nail Art"],
        staff: [
            { name: "Mason", role: "Hair Stylist", timings: "10:00 - 18:00" },
            { name: "Liam", role: "Nail Technician", timings: "11:30 - 19:30" },
        ],
        startTime: "10:00",
        endTime: "20:00",
        openDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        rating: 4.3,
    },
    {
        name: "The Beauty Haven",
        services: ["Facial", "Hair Spa", "Threading", "Waxing"],
        staff: [
            { name: "Amelia", role: "Beautician", timings: "10:00 - 17:00" },
            { name: "James", role: "Hair Spa Specialist", timings: "11:00 - 18:00" },
        ],
        startTime: "10:00",
        endTime: "18:00",
        openDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
        rating: 3.9,
    },
    {
        name: "Radiance Parlor",
        services: ["Haircut", "Hair Coloring", "Manicure", "Pedicure"],
        staff: [
            { name: "Charlotte", role: "Hair Stylist", timings: "9:30 - 16:30" },
            { name: "Sophia", role: "Nail Technician", timings: "10:00 - 18:00" },
        ],
        startTime: "9:00",
        endTime: "18:00",
        openDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
        rating: 4.7,
    },
    {
        name: "Style Hub",
        services: ["Haircut", "Nail Art", "Threading", "Waxing"],
        staff: [
            { name: "Evelyn", role: "Beautician", timings: "10:30 - 18:30" },
            { name: "Henry", role: "Hair Stylist", timings: "11:00 - 19:00" },
        ],
        startTime: "10:00",
        endTime: "19:00",
        openDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
        rating: 4.1,
    },
    {
        name: "Heavenly Touch",
        services: ["Bridal Makeup", "Facial", "Massage", "Threading"],
        staff: [
            { name: "Mia", role: "Makeup Artist", timings: "9:00 - 17:00" },
            { name: "Noah", role: "Massage Therapist", timings: "10:00 - 18:00" },
        ],
        startTime: "9:00",
        endTime: "18:00",
        openDays: ["Monday", "Wednesday", "Thursday", "Friday"],
        rating: 4.4,
    },
];


module.exports = salons