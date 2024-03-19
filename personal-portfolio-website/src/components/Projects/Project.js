import React from 'react'
import Title from '../layouts/Title'
import Coffee from "../../assets/Coffee.png";
import SafePark from "../../assets/SafePark.png";
import smartGrocery from "../../assets/smartGrocery.png";
import WeatherApp from "../../assets/WeatherApp.png";
import ProjectCard from './ProjectCard'

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
        <div className='mt-10 grid grid-cols-3 gap-14'>
          <ProjectCard 
            title="Coffee Shop Management System"
            des="Standalone system, In this system, The admin panel is able to manage their
            employee details, supplier details, and their items."
            src={Coffee}
          />
          <ProjectCard 
            title="Smart Grocery Store Finder"
            des="The App Helps shoppers find nearby grocery stores based on
            ratings and searches. The app uses Google Maps and realtime data to display nearby stores and allows users to
            purchase their goods."
            src={smartGrocery}
          />
          <ProjectCard 
            title="Weather App"
            des="A standalone system that provides users with real-time
            weather information and forecasts for a specific location. Users can access data such as temperature, humidity, and
            wind speed."
            src={WeatherApp}
          />
          <ProjectCard 
            title="Safe Park"
            des="SafePark is a parking companion, design to simplify urban commute. SafePark is committed to providing a secure, convenient, and efficient parking experirnce. "
            src={SafePark}
          />
        </div>
    </section>
  )
}

export default Project;