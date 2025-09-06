


function Contact() {


    return (
        <div id="contact" className="pb-24 md:p-16  w-full">
            <h2 className="font-bold text-[35px] md:text-[42px] text-gray-800  text-center pb-2 mb-2 lg:pt-5">Get In Touch</h2>
            <div className="flex bg-pink-50 flex-col justify-center items-center gap-y-5 md:gap-9 md:mx-auto shadow-lg  md:p-10 p-6 md:pl-16 md:pr-16 rounded-lg w-full md:w-fit">
                <input className="shadow-md w-full md:w-[550px] text-md md:text-lg p-3 border-none outline-none rounded-md tracking-wider" placeholder="mailid@gamil.com" type="text" />
                <input className="shadow-md w-full md:w-[550px] text-md md:text-lg p-3 border-none outline-none rounded-md tracking-wider" placeholder="name " type="text" />
                <textarea className="shadow-md w-full md:w-[550px] text-md md:text-lg p-3 border-none outline-none rounded-md h-[110px] tracking-wider" placeholder="content" name="" id=""></textarea>
                <button className="bg-black text-white text-md md:text-lg tracking-wide hover:tracking-widest transition-all duration-300
                 p-3 pl-7 pr-7 rounded-md">Send Message</button>
            </div>

        </div>
    )
}

export default Contact