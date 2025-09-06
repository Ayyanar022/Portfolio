

const Footer = () => {


    return (
        <div className=" pt-12 pb-12 md:p-12 text-white w-full bg-black flex justify-center items-center flex-col gap-4">
            <h2 className="font-semibold font-sans text-xl">👨‍💻Ayyanar dev</h2>
            <p className="flex gap-2  md:gap-4"> <span>📞 8248834603</span> <a href="mailto:ayan.prof022@gmail.com"> 📧 ayan.prof022@gmail.com</a> </p>
            <p className="text-sm md:md">  💻 github : https://github.com/Ayyanar022  <a target="_blank" className="text-orange-400 ml-5 hover:tracking-wider duration-300" href="https://github.com/Ayyanar022" rel="noreferrer">Click Here</a> </p>
            <p className="text-gray-400 text-sm mt-2">
                © {new Date().getFullYear()} Ayyanar. All rights reserved.
            </p>
        </div>
    )
}

export default Footer