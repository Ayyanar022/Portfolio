
const ProjectCard = (params) => {


    return (
        <div className="rounded-lg border shadow p-2 relative group overflow-hidden lg:w-[50%]">
            <section className='w-full  flex items-center justify-center relative '>
                <img src={params.img} alt="img" className='w-full h-full  object-cover rounded-lg  transition-transform  group-hover:scale-125' />
            </section>

            {/* <section className='p-5 absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col  scale-0 group-hover:scale-100 transition-all duration-500'> */}
            {/* <section className='p-5 absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col  opacity-0 group-hover:opacity-100 transition-all duration-500'> */}
            <section className='p-5 absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col  translate-y-full group-hover:translate-y-0 transition-all duration-500'>
                <h2 className='font-semibold text-xl pb-4'>{params.ProjectName}</h2>
                <p className='max-w-[400px] text-[12px] md:text-[14px] tracking-wide'>{params.description}</p>
                <p className='font-light text-xs md:text-[13px] tracking-wider pt-2 pb-2'>Tech used : <span>{params.techUsed}  </span></p>
                <p className='font-normal text-sm tracking-wide md:text-[18px]'>{params.gitlink}</p>


            </section>


        </div>
    )
}

export default ProjectCard