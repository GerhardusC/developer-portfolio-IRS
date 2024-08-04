import React from 'react'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

const HomePage = () => {
    return (<>
        <div>HomePage</div>
        {/* TODO! Something unique about the homepage, maybe pic or something... */}
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
    </>
    )
}

export default HomePage