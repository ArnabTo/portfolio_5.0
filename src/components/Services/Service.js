import './Service.css'
const Service = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl text-[#8F00FF] text-start mb-4">Services.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className=" p-4 bg-[#9000ff1b] rounded-md">
                    <h2 className="servP text-[#8F00FF] text-2xl">Comprehensive Web Solutions with MERN Expertise
                    </h2>
                    <p className="servP">Elevate your online presence with end-to-end web development services. Leveraging the power of the MERN stack (MongoDB, Express.js, React.js, Node.js), I craft dynamic, responsive, and scalable web applications. From intuitive user interfaces to robust server-side logic, I ensure a seamless user experience from start to finish</p>
                    <div></div>
                </div>
                <div className=" p-4 bg-[#9000ff1b] rounded-md">
                    <h2 className="servP text-[#8F00FF] text-2xl">Responsive Front-End Design
                    </h2>
                    <p className="servP">Transform ideas into visually stunning and user-friendly interfaces. With expertise in HTML, CSS, and React.js, I create responsive web designs that adapt seamlessly to diverse devices and screen sizes. Elevate your user engagement with captivating front-end experiences that leave a lasting impression.</p>
                    <div></div>
                </div>
                <div className=" p-4 bg-[#9000ff1b] rounded-md">
                    <h2 className="servP text-[#8F00FF] text-2xl">Pixel-Perfect PSD to HTML
                    </h2>
                    <p className="servP">Transform your design concepts into reality with precision and attention to detail. I specialize in converting PSD (Photoshop) designs into high-quality, hand-coded HTML/CSS. Each element is meticulously translated, ensuring a seamless transition from design to development.</p>
                    <div></div>
                </div>
                <div className=" p-4 bg-[#9000ff1b] rounded-md">
                    <h2 className="servP text-[#8F00FF] text-2xl">Harnessing the Power of Front-End Frameworks
                    </h2>
                    <p className="servP">Leverage the capabilities of modern front-end frameworks to build dynamic and interactive user interfaces. Whether it's React for component-based architectures, Vue for simplicity and flexibility, or Angular for robust applications, I bring expertise in utilizing these frameworks to enhance your web projects.</p>
                    <div></div>
                </div>
              
            </div>
        </div>
    );
};

export default Service;