import artBoard from "./Image/Artboard 1.svg";
import "./index.css"

const SuccessRoute = () => {
    return(
        <div className="success-bg-container">
            <div className="success-view-container">
            <img src = {artBoard} alt = "artBoard" className="art-board"/>
            <h1 className="success-view-heading">Welcome to AdmitKard</h1>
            <div className="success-view-descrition-container">
                <p className="success-view-descrition">In order to provide you with a custom experience,<br/><span className="add-css"> we need to ask you a few questions.</span></p>
            </div>
            <div className="success-btn-container">
                <button className="get-start-btn">Get Started</button>
                <p className="btn-description">*This will only take 5 min.</p>
            </div>
        </div>
        </div>
    )
}

export default SuccessRoute