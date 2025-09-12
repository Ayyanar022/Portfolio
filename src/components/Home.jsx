
const Home = () => {


    return (
        <div id="home" className=" flex  flex-col-reverse lg:flex-row gap-3 lg:gap-16 justify-center items-center pt-20 md:pt-36 mb-4 md:mb-12 
                                     p-4">

            <div className="flex flex-col justify-center items-center w-full md:w-fit p-4">
                <p className="font-sans text-gray-600 tracking-wide ">i am react dev</p>
                <div className="font-bold text-[35px] md:text-[49px] leading-snug ">
                    <h1>Hi , i am <span className="text-orange-400">Ayyanar</span></h1>
                    <h1>I build resposiv &</h1>
                    <h1>modern websites</h1>
                </div>
                <div className="flex gap-5 md:gap-9 mt-8 ">

                    <button className="text-orange-400 bg-gray-100 text-lg md:text-xl font-semibold  md:p-3 p-2  pl-6 pr-6  md:pl-8 md:pr-8 rounded-md">Hire Me</button>
                    <a href="/Ayyanar-React.pdf" target="_blank" className="bg-orange-300  text-lg md:text-xl p-2 font-semibold  md:p-3  pl-6 pr-6  md:pl-8 md:pr-8 rounded-md">View CV</a>
                </div>
            </div>

            <div className="flex bg-yellow-200 justify-center  w-[300px]">
                <img src="/asserts/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" alt="profile" />
            </div>
        </div>
    )
}


export default Home