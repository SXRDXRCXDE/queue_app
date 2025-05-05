import {FiArrowRight} from "react-icons/fi";

export const Hospitals = [
    {
        id: 1,
        rating:"Reyting 4.97",
        img:`https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `4 - Sonli Oilaviy Poliklinika`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompy...rafi`,
    },
    {
        id: 2,
        rating:"Reyting 4.82",
        img:`https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Toshkent Tibbiyot Universiteti`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompy...rafi`,
    },
    {
        id: 3,
        rating:"Reyting 4.25",
        img:`https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `MediCare Poliklinikasi`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompy...rafi`,
    },
    {
        id: 4,
        rating:"Reyting 4.10",
        img:`https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Barkamol Tibbiyot Markazi`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompy...rafi`,
    },
    {
        id: 5,
        rating:"Reyting 4.85",
        img:`https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Tashkent Tibbiyot Markazi`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompy...rafi`,
    },
];

export const SelectedHospitalData = [
    {
        img: `https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `4 - Sonli Oilaviy Poliklinika`,
        distance: `Sizdan 1.5 km uzoqlikda`,
        categories: `Analizlar, Diagnostika, Kompyuter tomografiyasi`,
        services: [
            { id: 1, name: `Analizlar`, price: 180000 },
            { id: 2, name: `Diagnostika`, price: 200000 },
            { id: 3, name: `Rentgen amaliyoti`, price: 220000 },
            { id: 4, name: `Kompyuter tomografiyasi`, price: 240000 },
        ]
    },
    {
        img: `https://images.unsplash.com/photo-1603500981327-7d722a8f9d9f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Toshkent Tibbiyot Universiteti`,
        distance: `Sizdan 2.2 km uzoqlikda`,
        categories: `Sog'liqni saqlash, Diagnostika, Amaliyotlar`,
        services: [
            { id: 1, name: `Ultrasonografiya`, price: 250000 },
            { id: 2, name: `Kardiologiya`, price: 280000 },
            { id: 3, name: `Ginekologiya`, price: 260000 },
            { id: 4, name: `Rentgen`, price: 300000 }
        ]
    },
    {
        img: `https://images.unsplash.com/photo-1506813102013-51a219ea1a3f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `MediCare Poliklinikasi`,
        distance: `Sizdan 3.0 km uzoqlikda`,
        categories: `Tibbiy xizmatlar, Reabilitatsiya, Xususiy xizmatlar`,
        services: [
            { id: 1, name: `Maslahatlar`, price: 150000 },
            { id: 2, name: `Reabilitatsiya`, price: 170000 },
            { id: 3, name: `Onkologiya`, price: 250000 },
            { id: 4, name: `Ultrasonografiya`, price: 230000 }
        ]
    },
    {
        img: `https://images.unsplash.com/photo-1581009683657-c31da3e4b49f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Barkamol Tibbiyot Markazi`,
        distance: `Sizdan 1.1 km uzoqlikda`,
        categories: `Barkamol xizmatlar, Xususiy diagnostika, Klinik`,
        services: [
            { id: 1, name: `Klinik tahlillar`, price: 190000 },
            { id: 2, name: `Sog'liqni saqlash maslahati`, price: 210000 },
            { id: 3, name: `Ginekologiya konsultatsiyasi`, price: 200000 },
            { id: 4, name: `Sog'liqni saqlash tekshiruvlari`, price: 220000 }
        ]
    },
    {
        img: `https://images.unsplash.com/photo-1601461423135-1b94ff5d1f6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name: `Tashkent Tibbiyot Markazi`,
        distance: `Sizdan 4.0 km uzoqlikda`,
        categories: `Oila poliklinikasi, Diagnostika, Sog'liqni saqlash`,
        services: [
            { id: 1, name: `Fizioterapiya`, price: 220000 },
            { id: 2, name: `Maslahatlar`, price: 200000 },
            { id: 3, name: `Tibbiy xizmatlar`, price: 250000 },
            { id: 4, name: `Sog'liqni saqlash tekshiruvlari`, price: 270000 }
        ]
    }
];

export const Services = [
    { id: 1, name: "Analizlar", price: 180000, distance: 1.2, rating: 4.5 },
    { id: 2, name: "Diagnostika", price: 200000, distance: 2.3, rating: 4.2 },
    { id: 3, name: "Rentgen amaliyoti", price: 220000, distance: 3.1, rating: 4.6 },
    { id: 4, name: "Kompyuter tomografiyasi", price: 240000, distance: 1.8, rating: 4.8 },
    { id: 5, name: "Ultrasonografiya", price: 250000, distance: 0.9, rating: 4.4 },
    { id: 6, name: "Kardiologiya", price: 280000, distance: 4.5, rating: 4.9 },
    { id: 7, name: "Ginekologiya", price: 260000, distance: 2.7, rating: 4.3 },
    { id: 8, name: "Rentgen", price: 300000, distance: 3.3, rating: 4.0 },
    { id: 9, name: "Maslahatlar", price: 150000, distance: 1.1, rating: 3.9 },
    { id: 10, name: "Reabilitatsiya", price: 170000, distance: 2.9, rating: 4.1 },
    { id: 11, name: "Onkologiya", price: 250000, distance: 4.0, rating: 4.7 },
    { id: 12, name: "Ultrasonografiya", price: 230000, distance: 1.6, rating: 4.5 },
    { id: 13, name: "Klinik tahlillar", price: 190000, distance: 2.1, rating: 4.3 },
    { id: 14, name: "Sog'liqni saqlash maslahati", price: 210000, distance: 3.8, rating: 4.0 },
    { id: 15, name: "Ginekologiya konsultatsiyasi", price: 200000, distance: 0.7, rating: 4.6 },
    { id: 16, name: "Sog'liqni saqlash tekshiruvlari", price: 220000, distance: 2.6, rating: 4.1 },
    { id: 17, name: "Fizioterapiya", price: 220000, distance: 1.9, rating: 4.4 },
    { id: 18, name: "Maslahatlar", price: 200000, distance: 3.5, rating: 3.8 },
    { id: 19, name: "Tibbiy xizmatlar", price: 250000, distance: 4.2, rating: 4.7 },
    { id: 20, name: "Sog'liqni saqlash tekshiruvlari", price: 270000, distance: 2.4, rating: 4.2 }
];



export const reviews = [
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Roman Sergiyev",
        review: "Просто быстро✅",
        stars: 5,
    },
    {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Anna Petrova",
        review: "Очень удобный сервис, рекомендую всем друзьям!",
        stars: 4,
    },
    {
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        name: "Dmitry Ivanov",
        review: "Хорошее обслуживание и приятный персонал.",
        stars: 5,
    },
];

export const selectedData = {
    name:"4- Sonli Oilaviy Poliklinika",
    rating:"Reyting 4.97",
    distance:"Sizdan 1.5 km uzoqlikda",
    img:"https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}


export const categories = [
    { label: "Kardiolog", color: "bg-[#44344F]", quantity: 98 },
    { label: "Ankolog", color: "bg-[#39796B]", quantity: 65 },
    { label: "Dietolog", color: "bg-[#9C9C6E]", quantity: 15 },
    { label: "Analiz", color: "bg-[#874949]", quantity: 36 },
    {
        label: "Barchasi",
        color: "bg-[#8E9BBF]",
        icon: <FiArrowRight className="text-white text-xl" />,
        quantity: 0,
    }
];

export const suggestions = [
    {
        distance: "5 km uzoqlikda",
        rating: 4.97,
        price: 150000
    },
    {
        distance: "2 km uzoqlikda",
        rating: 4.85,
        price: 90000
    },
    {
        distance: "8 km uzoqlikda",
        rating: 4.75,
        price: 1200000
    },
    {
        distance: "3 km uzoqlikda",
        rating: 4.90,
        price: 120000
    },
    {
        distance: "1.5 km uzoqlikda",
        rating: 5.0,
        price: 100000
    }
];


export const days = [
    {
        id: 1,
        day: "Dushanba",
        date: "2025-05-05",
        dayOfMonth: 5,
        available: true,
        timeSlots: ["08:00", "09:00", "10:30", "13:00", "15:00"],
    },
    {
        id: 2,
        day: "Seshanba",
        date: "2025-05-06",
        dayOfMonth: 6,
        available: true,
        timeSlots: ["09:00", "10:00", "11:30", "14:00", "16:00", "17:30"],
    },
    {
        id: 3,
        day: "Chorshanba",
        date: "2025-05-07",
        dayOfMonth: 7,
        available: true,
        timeSlots: ["08:30", "09:45", "11:15", "13:30", "15:45"],
    },
    {
        id: 4,
        day: "Payshanba",
        date: "2025-05-08",
        dayOfMonth: 8,
        available: true,
        timeSlots: ["07:30", "09:00", "10:15", "12:00", "14:30", "16:00"],
    },
    {
        id: 5,
        day: "Juma",
        date: "2025-05-09",
        dayOfMonth: 9,
        available: true,
        timeSlots: ["08:00", "09:00", "11:00", "13:00", "15:00"],
    },
    {
        id: 6,
        day: "Shanba",
        date: "2025-05-10",
        dayOfMonth: 10,
        available: true,
        timeSlots: ["09:30", "10:45", "12:00", "13:30", "15:00"],
    },
    {
        id: 7,
        day: "Yakshanba",
        date: "2025-05-11",
        dayOfMonth: 11,
        available: true,
        timeSlots: ["10:00", "11:30", "13:00", "14:30", "16:00"],
    },
    {
        id: 8,
        day: "Dushanba",
        date: "2025-05-12",
        dayOfMonth: 12,
        available: true,
        timeSlots: ["08:15", "09:45", "11:00", "13:15", "14:45", "16:30"],
    },
    {
        id: 9,
        day: "Seshanba",
        date: "2025-05-13",
        dayOfMonth: 13,
        available: true,
        timeSlots: ["07:45", "09:00", "10:30", "12:00", "13:30", "15:00"],
    },
    {
        id: 10,
        day: "Chorshanba",
        date: "2025-05-14",
        dayOfMonth: 14,
        available: true,
        timeSlots: ["08:00", "09:15", "10:45", "12:15", "13:45"],
    },
];

export const CardiologsList = [
    {
        id: 1,
        label: "Cardiolog",
        price: 150000,
        distance: 1.4,
        hospitalName: "4 - Poliklinika",
        rating: 4.3
    },
    {
        id: 2,
        label: "Cardiolog",
        price: 165000,
        distance: 2.1,
        hospitalName: "Sog'lom Hayot Klinikasi",
        rating: 4.6
    },
    {
        id: 3,
        label: "Cardiolog",
        price: 140000,
        distance: 0.9,
        hospitalName: "Shifo Med Center",
        rating: 4.4
    },
    {
        id: 4,
        label: "Cardiolog",
        price: 155000,
        distance: 1.8,
        hospitalName: "5 - Poliklinika",
        rating: 4.2
    },
    {
        id: 5,
        label: "Cardiolog",
        price: 170000,
        distance: 3.0,
        hospitalName: "Tashkent Med Center",
        rating: 4.7
    },
    {
        id: 6,
        label: "Cardiolog",
        price: 160000,
        distance: 2.6,
        hospitalName: "Yuksalish Klinikasi",
        rating: 4.5
    },
    {
        id: 7,
        label: "Cardiolog",
        price: 145000,
        distance: 1.2,
        hospitalName: "Davolash Klinika",
        rating: 4.1
    },
    {
        id: 8,
        label: "Cardiolog",
        price: 150000,
        distance: 1.5,
        hospitalName: "Salomatlik Markazi",
        rating: 4.4
    },
    {
        id: 9,
        label: "Cardiolog",
        price: 158000,
        distance: 2.0,
        hospitalName: "Oila Poliklinikasi",
        rating: 4.3
    },
    {
        id: 10,
        label: "Cardiolog",
        price: 162000,
        distance: 2.3,
        hospitalName: "Modern Med Center",
        rating: 4.6
    }
];


export const Onkolog = [
    {
        id: 1,
        label: "Onkolog",
        price: 180000,
        distance: 1.6,
        hospitalName: "4 - Poliklinika",
        rating: 4.2
    },
    {
        id: 2,
        label: "Onkolog",
        price: 195000,
        distance: 2.3,
        hospitalName: "Onkologiya Markazi",
        rating: 4.6
    },
    {
        id: 3,
        label: "Onkolog",
        price: 175000,
        distance: 1.0,
        hospitalName: "Sog'lom Hayot Klinikasi",
        rating: 4.3
    },
    {
        id: 4,
        label: "Onkolog",
        price: 185000,
        distance: 2.5,
        hospitalName: "Shifo Med Center",
        rating: 4.4
    },
    {
        id: 5,
        label: "Onkolog",
        price: 200000,
        distance: 3.4,
        hospitalName: "Yuksalish Klinikasi",
        rating: 4.7
    },
    {
        id: 6,
        label: "Onkolog",
        price: 190000,
        distance: 2.1,
        hospitalName: "Salomatlik Markazi",
        rating: 4.5
    },
    {
        id: 7,
        label: "Onkolog",
        price: 178000,
        distance: 1.4,
        hospitalName: "Tashkent Med Center",
        rating: 4.1
    },
    {
        id: 8,
        label: "Onkolog",
        price: 182000,
        distance: 1.9,
        hospitalName: "Davolash Klinika",
        rating: 4.3
    },
    {
        id: 9,
        label: "Onkolog",
        price: 193000,
        distance: 2.7,
        hospitalName: "Oila Poliklinikasi",
        rating: 4.4
    },
    {
        id: 10,
        label: "Onkolog",
        price: 188000,
        distance: 2.0,
        hospitalName: "Modern Med Center",
        rating: 4.5
    }
];



export const Dietolog = [
    {
        id: 1,
        label: "Dietolog",
        price: 120000,
        distance: 1.3,
        hospitalName: "4 - Poliklinika",
        rating: 4.2
    },
    {
        id: 2,
        label: "Dietolog",
        price: 135000,
        distance: 2.0,
        hospitalName: "Sog'lom Hayot Klinikasi",
        rating: 4.4
    },
    {
        id: 3,
        label: "Dietolog",
        price: 125000,
        distance: 0.8,
        hospitalName: "Shifo Med Center",
        rating: 4.3
    },
    {
        id: 4,
        label: "Dietolog",
        price: 140000,
        distance: 2.2,
        hospitalName: "Yuksalish Klinikasi",
        rating: 4.5
    },
    {
        id: 5,
        label: "Dietolog",
        price: 130000,
        distance: 1.7,
        hospitalName: "Davolash Klinika",
        rating: 4.1
    },
    {
        id: 6,
        label: "Dietolog",
        price: 145000,
        distance: 2.8,
        hospitalName: "Tashkent Med Center",
        rating: 4.6
    },
    {
        id: 7,
        label: "Dietolog",
        price: 138000,
        distance: 1.5,
        hospitalName: "Salomatlik Markazi",
        rating: 4.4
    },
    {
        id: 8,
        label: "Dietolog",
        price: 132000,
        distance: 1.9,
        hospitalName: "Oila Poliklinikasi",
        rating: 4.2
    },
    {
        id: 9,
        label: "Dietolog",
        price: 127000,
        distance: 1.1,
        hospitalName: "Modern Med Center",
        rating: 4.3
    },
    {
        id: 10,
        label: "Dietolog",
        price: 137000,
        distance: 2.4,
        hospitalName: "Wellness Center",
        rating: 4.5
    }
];



export const Analiz = [
    {
        id: 1,
        label: "Analiz",
        price: 90000,
        distance: 1.2,
        hospitalName: "4 - Poliklinika",
        rating: 4.2
    },
    {
        id: 2,
        label: "Analiz",
        price: 100000,
        distance: 2.0,
        hospitalName: "Sog'lom Hayot Klinikasi",
        rating: 4.3
    },
    {
        id: 3,
        label: "Analiz",
        price: 95000,
        distance: 1.0,
        hospitalName: "Shifo Med Center",
        rating: 4.1
    },
    {
        id: 4,
        label: "Analiz",
        price: 105000,
        distance: 2.3,
        hospitalName: "Yuksalish Klinikasi",
        rating: 4.4
    },
    {
        id: 5,
        label: "Analiz",
        price: 98000,
        distance: 1.5,
        hospitalName: "Davolash Klinika",
        rating: 4.0
    },
    {
        id: 6,
        label: "Analiz",
        price: 102000,
        distance: 2.7,
        hospitalName: "Tashkent Med Center",
        rating: 4.5
    },
    {
        id: 7,
        label: "Analiz",
        price: 97000,
        distance: 1.4,
        hospitalName: "Salomatlik Markazi",
        rating: 4.3
    },
    {
        id: 8,
        label: "Analiz",
        price: 101000,
        distance: 1.8,
        hospitalName: "Oila Poliklinikasi",
        rating: 4.2
    },
    {
        id: 9,
        label: "Analiz",
        price: 96000,
        distance: 1.1,
        hospitalName: "Modern Med Center",
        rating: 4.4
    },
    {
        id: 10,
        label: "Analiz",
        price: 103000,
        distance: 2.5,
        hospitalName: "Wellness Center",
        rating: 4.5
    }
];

