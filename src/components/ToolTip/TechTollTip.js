import React from 'react';
import AnimatedTooltip from '../ui/animated-tooltip';

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Programming Language",
        image:
            "https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png",
    },
    {
        id: 2,
        name: "React",
        designation: "Framework",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxiFZo8hp7oqoftdM8UCkftr2ZDLY0C25LA&s",
    },
    {
        id: 3,
        name: "TailwindCSS",
        designation: "Framework",
        image:
            "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    },
    {
        id: 4,
        name: "Node",
        designation: "Framework",
        image:
            "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
    },
    {
        id: 5,
        name: "Express",
        designation: "Framework",
        image:
            "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    },
    {
        id: 6,
        name: "Next.js",
        designation: "Library",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66XJ06C2xRGnGd83Nkct1ii53sT93uH8Ghw&s",
    },
    {
        id: 7,
        name: "MongoDB",
        designation: "Database",
        image:
            "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
    },
    {
        id: 8,
        name: "VS Cdoe",
        designation: "Tool",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgajHLweXdUu9UDqmugHY6o-YLow8gUGSc0Q&s",
    },
    {
        id: 9,
        name: "Netlify",
        designation: "Tool",
        image:
            "https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png",
    },
    {
        id: 10,
        name: "Vercel",
        designation: "Tool",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb3zO75iHwUWgYBm-cKKgX1HYqo_4C5vY0A&s",
    },
    {
        id: 11,
        name: "Firebase",
        designation: "Tool",
        image:
            "https://e7.pngegg.com/pngimages/119/167/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png",
    },
    {
        id: 12,
        name: "GitHub",
        designation: "Tool",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0TtaTbg9dT7tqx_qxhQFC4ul9meZdIW9MQ&s",
    },
];


const TechTollTip = () => {
    return (
        <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-11 gap-3 mb-10 w-full mt-5">
            <AnimatedTooltip items={people} />
        </div>
    );
};

export default TechTollTip;