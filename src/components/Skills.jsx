import Skillcard from './Skillcard'

import htmllogo from '../../src/asserts/html2.webp';
import tailwindlogo from '../../src/asserts/tailwindlog.png';
import jslogo from '../../src/asserts/jslogo.webp';
import reactlogo from '../../src/asserts/reactlogo.png';
import nodelologo from '../../src/asserts/nodelogo2.webp';
import expresslogo from '../../src/asserts/expresslogo.png';
import mysqllogo from '../../src/asserts/mysqllogo.jpg';
import pythonlogo from '../../src/asserts/python.jpeg';
import mongodblogo from '../asserts/mongodb.png'
import css2 from '../asserts/css2.png'



const Skills = () => {

    const skillcard = [
        { "logo": htmllogo, name: "HTML", key: 1 },
        { "logo": css2, name: "CSS", key: 2 },
        { "logo": tailwindlogo, name: "TAILWIND", key: 3 },
        { "logo": jslogo, name: "JAVASCRIPT", key: 4 },
        { "logo": reactlogo, name: "REACT", key: 5 },
        { "logo": nodelologo, name: "NODEJS", key: 6 },
        { "logo": expresslogo, name: "EXPRESSJS", key: 7 },
        { "logo": mysqllogo, name: "MY SQL", key: 8 },
        { "logo": pythonlogo, name: "PYTHON", key: 9 },
        { "logo": mongodblogo, name: "MONGODB", key: 10 },
    ]

    return (
        <div id='skill' className='mt-16 md:mt-4 p-6 pt-3 md:p-14 '>
            <h1 className='font-bold text-[35px] md:text-[42px] text-gray-800 mb-3 text-center pb-4 md:pb-10 '>My Skills</h1>
            <div className='flex justify-around flex-wrap gap-y-10 gap-x-7 md:gap-x-24 md:gap-y-12 md:pl-10 md:pr-10    p-2'>

                {skillcard.map((data) => (

                    <Skillcard img={data.logo} key={data.key} name={data.name} />
                ))}

            </div>

        </div>
    )
}

export default Skills