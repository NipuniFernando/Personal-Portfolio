import React from 'react'
import Title from '../layouts/Title'

function Project() {
  return (
    <section 
        id='projects'
        className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex justify-center items-center text-center'> 
            <Title
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
            />
        </div>
    </section>
  )
}

export default Project;