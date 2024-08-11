import React from 'react'
import HomePage from '../Pages/HomePage'
import CvSection from '../Pages/CvSection'
import ProjectsSection from '../Pages/ProjectsSection'
import ContactPage from '../Pages/ContactPage'

type RouterProps = {
    activePage: string,
}
const Router = ({activePage}: RouterProps) => {
    switch (activePage) {
        case "Home": 
            return <HomePage />
        case "About":
            return <CvSection />
        case "Projects":
            return <ProjectsSection />
        case "Contact":
            return <ContactPage />
    }
}

export default Router