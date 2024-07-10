import HeroImgMobile from "./HeroImgMobile"

interface Props {
    open: boolean
}
const Hero = ({ open }: Props) => {
    return (
        <header
            style={{
                opacity: open ? 0.6 : 1,
                backgroundColor: open ? "black" : "transparent",
                transition: "all 0.5s ease",
            }}
        >

            <div className="hero-mobile-container">
                <div className="hero-mobile-bg-img"></div>
                <div className="hero-mobile-mockups"></div>
            </div>
            <div className="hero-desktop-container">
                <div className="hero-desktop-bg-img"></div>
                <div className="hero-desktop-mockups"></div>
            </div>

            <div className="hero-text">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
        </header>
    )
}
export default Hero