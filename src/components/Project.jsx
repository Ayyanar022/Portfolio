import jewllery from '../asserts/pexels-elina-sazonova-1927259.jpg'
import ProjectCard from './projectCard'
import E_comarce_img from '../asserts/Ecomarce.jpg'
import Portfolio_img from '../asserts/Portfolio.png'

const Project = () => {

    const data = [
        {
            "img": E_comarce_img,
            "ProjectName": "E-commerce",
            "Desciption": "Developed a dynamic and fully responsive e-commerce web application using React, Node.js, Express, and MongoDB. Built features such as product listing, cart management, and secure user authentication.",
            "tech": "MERN stack ,Twailwind css, Auth0 , Cloudinary ,MUI",
            "gitlink": "Ayyanar022/MEARN-Stack_project"
        },
        {
            "img": Portfolio_img,
            "ProjectName": "Portfolio",
            "Desciption": "Its a Fully respnsive website hosted on Render . ",
            "tech": "Reactjs and Tailwind css",
            "gitlink": "Ayyanar022/MEARN-Stack_project"
        },
    ]

    return (
        <div id='project' className=' p-4 mb-16 md:p-16 mt-20 bg-gray-100 '>
            <h1 className='font-bold text-[35px] md:text-[42px] text-gray-800 mb-3 text-center md:pb-10'>Live Project</h1>


            <section className='flex flex-col lg:flex-row  gap-10 w-full shadow-sm'>
                <div className=' w-full lg:w-[45%] relative'>
                    <img src={jewllery} alt="jewell" className='w-full object-cover rounded-md' />


                    <div className='bg-black opacity-0 absolute inset-0 rounded-md  hover:opacity-70 transform duration-300 flex justify-center items-center'>
                        <a href="https://divinegold-4789.onrender.com" target='_blank' rel="noopener noreferrer" className='text-white  w-full h-full text-2xl font-bold  flex justify-center items-center'>View Project</a>
                    </div>
                </div>


                <div className='w-full lg:w-[55%] '>
                    <h2 className='font-semibold text-lg md:text-xl pb-4'> Jewelry Web Application – DivineGold (ADG)</h2>
                    <p className='text-sm md:text-lg max-w-[600px]'> Built a MERN stack jewelry app with dynamic pricing, admin panel, and Auth0 login. Features include an
                        Explore page, referral points system, and WhatsApp cart sharing and managing customers data as a business admin.
                        Deployed on Render with media stored on
                        Cloudinary.
                    </p>
                    <ul className='list-disc pl-4 md:text-sm tracking-wide pt-1 text-[12px]' >
                        <li>User can see live price for each jewell in seconds for diffrent quality </li>
                        <li>Busimess abmin can modify all datas and can track customers details and sales details </li>
                        <li>This app benifit both customer and seller</li>
                    </ul>

                    <p className='font-light tracking-wider pt-2 pb-6 text-sm p-3 '>Tech used : <span> MERN stack ,Twailwind css, Auth0 , Cloudinary , MUI  </span></p>
                    <a className='bg-orange-300 p-3 pl-6   ml-2  pr-6 rounded font-semibold  ' href="https://divinegold-4789.onrender.com" target='_blank' rel="noreferrer">Click Me</a>

                </div>
            </section>



            <div className='flex flex-col lg:flex-row  gap-8  md:gap-20 mt-16   '>
                {
                    data.map((value, index) => (

                        <ProjectCard ProjectName={value.ProjectName} img={value.img} description={value.Desciption} techUsed={value?.tech} gitlink={value.gitlink} />
                    ))
                }

            </div>

        </div>
    )
}

export default Project