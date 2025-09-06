import img from '../../src/asserts/1756832456287n70x4nxf.webp'

const About = () => {


    return (
        <div id='about' className='flex gap-10 p-10 md:pt-20 md:pb-20 bg-gray-100 mt-16'>
            <section className='  w-[40%] hidden md:block md:bg-yellow-50 '>
                <img className=' w-[400px]  md:pt-20 lg:pt-3 ' src={img} alt="img" />
            </section>


            <section className="w-full md:w-[50%]">
                <h1 className="font-bold text-4xl text-gray-800 mb-5 border-l-8 border-orange-500 pl-3">
                    About Me
                </h1>
                <p className="hidden md:block tracking-wide text-gray-700 leading-relaxed">
                    Passionate <span className="text-orange-400 font-medium">React.js Developer</span> with a strong foundation in
                    building responsive and dynamic user interfaces. Skilled in modern web
                    technologies including <span className="text-orange-400 font-normal">ReactJS, JavaScript, TailwindCSS, NodeJS, ExpressJS,</span>
                    and <span className="text-orange-400 font-normal ">MySQL</span>. Developed academic and personal projects that
                    demonstrate component-based architecture, state management, and clean UI design.
                    Eager to start my career as a React Developer and apply my skills to real-world projects.
                </p>

                {/* for mobile */}
                <p className="md:hidden tracking-wide text-gray-700 leading-relaxed">
                    Passionate <span className="text-orange-400 font-medium">React.js Developer</span> with a solid foundation in creating responsive, dynamic UIs.
                    Skilled in <span className="text-orange-400 font-normal">ReactJS, JavaScript, TailwindCSS, NodeJS, ExpressJS,</span> and <span className="text-orange-400 font-normal">MySQL</span>.
                    Experienced in building projects that highlight clean design and state management.
                    Eager to begin my career and apply these skills to real-world work.
                </p>



                <ul className="mt-8 space-y-4">
                    <li className="flex gap-6 items-center">
                        <h3 className="font-semibold text-lg text-gray-700 w-28">👤 Name</h3>
                        <span className="text-gray-800 text-lg">Ayyanar</span>
                    </li>

                    <li className="flex gap-6 items-center">
                        <h3 className="font-semibold text-lg text-gray-700 w-28">📍 Location</h3>
                        <span className="text-gray-800 text-lg">Chennai</span>
                    </li>

                    <li className="flex gap-6 items-center">
                        <h3 className="font-semibold text-lg text-gray-700 w-28">📧 Email</h3>
                        <a
                            href="mailto:ayan.prof022@gmail.com"
                            className="text-orange-500 hover:underline text-lg"
                        >
                            ayan.prof022@gmail.com
                        </a>
                    </li>

                    <li className="flex gap-6 items-center">
                        <h3 className="font-semibold text-lg text-gray-700 w-28">📞 Mobile</h3>
                        <a href="tel:8248834603" className="text-orange-500 hover:underline text-lg">
                            8248834603
                        </a>
                    </li>

                    <li className="flex gap-6 items-center">
                        <h3 className="font-semibold text-lg text-gray-700 w-28">💻 GitHub</h3>
                        <a
                            href="https://github.com/Ayyanar022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:underline text-lg"
                        >
                            github.com/Ayyanar022
                        </a>
                    </li>
                </ul>
            </section>


        </div>
    )
}

export default About