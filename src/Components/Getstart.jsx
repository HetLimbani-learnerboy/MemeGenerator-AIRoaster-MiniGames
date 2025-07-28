import { useNavigate } from "react-router-dom";
import "./Getstartdesign.css";

const Getstart = () => {
    const navigate = useNavigate();

    const gotoMeme = () => {
        let meme = document.getElementById("meme");
        let url = "https://meme-api.com/gimme/";
        let subreddits = ["catmemes", "dogmemes", "wholesomememes", "dankmemes", "me_irl"];

        let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

        fetch(url + randomSubreddit)
            .then((response) => response.json())  // ✅ Fixed typo here
            .then((data) => {
                meme.src = data.url; // ✅ This works as expected
            });
    };

    return (
        <div className="Getstartdesign">
            <section className="section">
                <div className="Getstartpage-design">
                    <h1>&nbsp;&nbsp;&nbsp; Welcome to TimePass Web...</h1>
                    <button className="backbuttondesign" onClick={() => navigate('/')}>Back</button>
                </div>

                <div className="Memesgenerate">
                    <div className="Memegeneratorcontainer">
                        <h3>🎭 Meme Generator</h3>
                        <img src='/DemoMemeimage.png' alt="meme" id="meme" />
                        <button className="genratememesdesign" onClick={gotoMeme}>Click to generate Memes</button> 
                        
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="Airoasterbot">
                    <h3>🤖 AI Roaster Bot</h3>
                    <input placeholder="Enter your name/interests" /><br />
                    <button>Genrates Lines</button>
                    <textarea></textarea>
                </div>
            </section>

            <section className="section">
                <div className="Minigmaes">
                    <h3>🎮 Mini Games</h3>
                    <div className="Minigames-section">
                        <ul>
                            <li className="game-1">Tic Tac Toe (with AI)</li>
                            <li className="game-2">Rock Paper Scissors</li>
                            <li className="game-3">Typing Speed Test</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Getstart;
