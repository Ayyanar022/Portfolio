import { useState } from "react"
import { Link } from "react-scroll"

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)


    return (
        <div className="z-40 flex justify-between items-center p-5 bg-gray-50 shadow-md fixed top-0 left-0 w-full ">
            <div className=""><h1 className="text-3xl font-bold tracking-wider pl-4"> <span className="text-orange-400">AYYANAR</span>  DEV</h1> </div>

            {/* {its for big screen } */}
            <nav className="hidden lg:flex gap-12 tracking-wide text-lg font-medium pr-10">
                <Link className="cursor-pointer" to='home' smooth={true} duration={500} spy={true} activeClass="text-orange-500 font-semibold" >Home</Link>
                <Link className="cursor-pointer" to="about" smooth={true} duration={500} offset={-55} spy={true} activeClass="text-orange-500 font-semibold" >About</Link>
                <Link className="cursor-pointer" to="skill" smooth={true} duration={500} offset={-40} spy={true} activeClass="text-orange-500 font-semibold">Skils</Link>
                <Link className="cursor-pointer" to='project' smooth={true} duration={500} offset={-40} spy={true} activeClass="text-orange-500 font-semibold" >Project</Link>
                <Link className="cursor-pointer" to='contact' smooth={true} duration={500} offset={-20} spy={true} activeClass="text-orange-500 font-semibold">Contact</Link>
            </nav>

            {/* {small screen} */}

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-2xl font-bold pr-4">☰</button>

            <nav className={` fixed top-0 right-0  w-[40%] tr b ansform transition-transform
                                          duration-500 ease-in-out  flex flex-col gap-4 font-medium text-lg p-4 bg-gray-400
                                           ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} `}>
                <button className=" text-left  " onClick={() => setMobileMenu(!mobileMenu)}>✖</button>
                <Link className="active:bg-gray-300 p-2 pl-4" to='home' smooth={true} duration={500} spy={true} activeClass="text-orange-500 font-semibold">Home</Link>
                <Link className="active:bg-gray-300 p-2 pl-4" to='about' smooth={true} duration={500} offset={-55} spy={true} activeClass="text-orange-500 font-semibold">About</Link>
                <Link className="active:bg-gray-300 p-2 pl-4" to="skill" smooth={true} duration={500} offset={-40} spy={true} activeClass="text-orange-500 font-semibold">Skils</Link>
                <Link className="active:bg-gray-300 p-2 pl-4" to='project' smooth={true} duration={500} offset={-40} spy={true} activeClass="text-orange-500 font-semibold">Project</Link>
                <Link className="active:bg-gray-300 p-2 pl-4 " to='contact' smooth={true} duration={500} offset={-20} spy={true} activeClass="text-orange-500 font-semibold">Contact</Link>

            </nav>



        </div>

    )
}

export default Header