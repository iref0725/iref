import React from 'react'
import Hero from './Hero'
import EducationAboutSection from './About'
import EducationStats from './Stats'
import Advantage from './Advantage'
import Placements from './Placements'
import PlacementsTable from './PlacementsTable'
import StudentTestimonial from './Testimonials'
import Gallery from './Gallery'
import StudentLife from './StudentLife'
import TrainingMethodology from './TrainingMethodology'
import EnrollmentSection from './Contact'
import ProgramStructureOverview from './MBAExecutive'


export default function Homepage() {
  return (
    <div>
      <Hero/>
      <EducationAboutSection/>
      <EducationStats/>
      <ProgramStructureOverview/>
      <Advantage/>
      <Placements/>
      <PlacementsTable/>
      <StudentTestimonial/>
      <Gallery/>
      <StudentLife/>
      <TrainingMethodology/>
      <EnrollmentSection/>
    </div>
  )
}
