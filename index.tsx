import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client'
import Navbar from './Components/General/Navbar';
import Router from './Components/General/Router';

const App = () => {
    const [activePage, setActivePage] = useState("Home");
    const pages = ["Home", "About", "Projects", "Contact"]
    return <>
        <Navbar activePage={activePage} setActivePage={setActivePage} pages={pages} />
        <Router activePage={activePage}/>
    </>
}

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);