import { useState } from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import LatestArticles from "../components/LatestArticles"
import Footer from "../components/Footer"

const LandingPage = () => {
    const [open, setOpen] = useState(false)
    // on click open hamburger menu
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <Navbar open={open} handleClick={handleClick} />
            <Hero open={open} />
            <About />
            <LatestArticles />
            <Footer />
        </>

    )
}
export default LandingPage