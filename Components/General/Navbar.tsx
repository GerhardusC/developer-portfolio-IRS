import React from 'react'

type NavbarProps = {
    activePage: string,
    setActivePage: React.Dispatch<React.SetStateAction<string>>,
    pages: string[]
}

const Navbar = ({ activePage, setActivePage, pages }: NavbarProps) => {
    return (
        <nav>
            {
                pages.map(page => {
                    return <div
                        className={`nav-link ${
                            page === activePage ?
                            "active-nav" : ""}`
                        }
                        onClick={(e) => {
                            setActivePage(page);
                        }}
                        key={page}
                        >
                            {page}
                    </div>
                })
            }
        </nav>
    )
}

export default Navbar