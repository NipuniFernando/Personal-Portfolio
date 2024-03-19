import React from 'react'
import Title from '../layouts/Title'

import ResumeCard from './ResumeCard'

function Resume() {
  return (
    <section 
        id='resume'
        className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex justify-center items-center text-center'> 
            <Title
                title="2+ YEARS OF EXPERIENCE"
                des="MY RESUME"
            />
        </div>
        <div>
            <ul className="w-full grid grid-cols-4">
                <li className="resumeLi">Education</li>
                <li className="resumeLi">Extra Curricular Activities</li>
                <li className="resumeLi">Professional Skills</li>
                <li className="resumeLi">Achievements</li>
            </ul>
        </div>
        <div className="py-12 font-titleFont gap-20">
            <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" w-1/2 h-[1000px] border-l-[6px] border-black
        border-opacity-30 flex flex-col gap-10">
            <ResumeCard
                title="BSc (Hons) in Computing and Information Systems"
                SubTitle="Sabaragamuwa University of Sri Lanka (2020-Present)"
                result="Current GPA: 3.40"
                
            />
            <ResumeCard 
                title="G.C.E. Advanced Level"
                SubTitle="Newstead Girls' College - Negombo (2009-2018)"
                result="ICT - B | Combined Mathematics - C | Physics - C" 
                des="District Rank - 29"
            />
            <ResumeCard 
                title="Diploma in Information Technology"
                SubTitle="Esoft Metro Campus - JaEla (2019-2020)" 
               
            />
            <ResumeCard 
                title="Diploma in English"
                SubTitle="Esoft Metro Campus - JaEla (2019-2020)" 
                
            />
            <ResumeCard 
                title="Diploma in Psychology and Counselling"
                SubTitle="SITC Campus (2022)" 
                
            />
        </div>
        
    </section>
  )
}

export default Resume