import './Background.css'
import CarVideo from '../../assets/car.mp4'

export default function Background(){
    return(
        <div className="background-container">
        <video autoPlay muted loop id="bg-video">
            <source src={CarVideo} type='video/mp4'/>
        </video>
        <div className="video-overlay"></div>
    </div>
    )
}