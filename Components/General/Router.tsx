import React from 'react'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ProjectsPage from '../Pages/ProjectsPage'
import ContactPage from '../Pages/ContactPage'

type RouterProps = {
    activePage: string,
}
const Router = ({activePage}: RouterProps) => {
    switch (activePage) {
        case "Home": 
            return <HomePage />
        case "About":
            return <AboutPage />
        case "Projects":
            return <ProjectsPage />
        case "Contact":
            return <ContactPage />
    }
}

export default Router