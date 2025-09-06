

const SkillCard = (params) => {
    return (
        <div className='  rounded-md  max-w-32 border bg-white border-gray-400 shadow-lg p-3 hover:shadow-lg hover:scale-105 transition-all duration-300 ' >
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-white">
                <img src={params.img} alt={params.name} className='max-w-full max-h-full object-contain mix-blend-multiply ' />
            </div>
            <p className=' text-center font-medium
            pt-3'>{params.name}</p>

        </div>
    )
}

export default SkillCard




