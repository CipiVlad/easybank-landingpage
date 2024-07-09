import { useState } from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
const LandingPage = () => {
    const [open, setOpen] = useState(false)


    // on click open hamburger menu
    const handleClick = () => {
        setOpen(!open)
        console.log(open)
    }
    return (
        <>
            <Navbar open={open} handleClick={handleClick} />
            <Hero open={open} handleClick={handleClick} />
            <About />
        </>

    )
}
export default LandingPage