import { useNavigate} from "react-router-dom";
import "./Getstartdesgin.css";

const Getstart = () => {
    const navigate = useNavigate();
    return (
        <div className="Getstartdesign">
        <div className="Getstartpage-design">
            <h1>Welcome to TimePass Web...</h1>
            <button className="backbuttondesign" onClick={()=>navigate('/')}>Back</button>     
            <div className="Memesgenerate">    
            <h2>Memes generate</h2>
            <button className="genratememesdesign">Click to generate Memes</button>
            </div>
            <div className="Airoasterbot">
                <input placeholder="Enter your name/interests" />
            </div>


        </div>
        </div>

    );
    }
export default Getstart;