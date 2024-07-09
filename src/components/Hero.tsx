import HeroImgMobile from "./HeroImgMobile"

interface Props {
    open: boolean
    handleClick: () => void
}
const Hero = ({ open, handleClick }: Props) => {
    return (
        <header>
            <div className="hero-image hero-img-fade">
                <HeroImgMobile open={open} />
            </div>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button onClick={handleClick}>Request Invite</button>
        </header>
    )
}
export default Hero