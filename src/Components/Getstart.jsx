import { useNavigate } from "react-router-dom";
import "./Getstartdesign.css";
import TicTacToe from "./TicTacToe";

const Getstart = () => {
    const navigate = useNavigate();

    const gotoMeme = () => {
        let meme = document.getElementById("meme");
        let url = "https://meme-api.com/gimme/";
        let subreddits = [
            "memes", "dankmemes", "wholesomememes", "me_irl", "funny", "PrequelMemes",
            "terriblefacebookmemes", "HistoryMemes", "AdviceAnimals", "MemeEconomy",
            "ComedyCemetery", "Animemes", "raimimemes", "okbuddyretard", "okbuddybaka",
            "IndianDankMemes", "DankIndianMemes", "reallifedoodles", "PewdiepieSubmissions",
            "trippinthroughtime", "boottoobig", "starterpacks", "facepalm",
            "techsupportgore", "bonehurtingjuice", "surrealmemes", "Antimeme",
            "catmemes", "dogmemes", "memez", "memesdaily", "memeaddict", "funnymemes"
        ];

        let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

        fetch(url + randomSubreddit)
            .then((response) => response.json())
            .then((data) => {
                meme.src = data.url;
            });
    };

    const tictactoe = () => {
        navigate('/TicTacToe');
    }

    const generateRoast = () => {
        const pname = document.getElementById("personname");
        const output = document.getElementById("roastoutput");
        if (pname.value.trim() === "") {
            alert("Please enter a name or interest to roast.");
            return;

        } else {
            const roastLines = [
                "pname, you're like a cloud. When you disappear, it's a beautiful day.",
                "pname, even autocorrect gave up correcting your life.",
                "pname, you have something on your chin… no, the third one down.",
                "pname, if you were any slower, you’d be in reverse.",
                "pname, your brain is like Google with no results.",
                "pname, you're the reason shampoo has instructions.",
                "pname, tu toh WhatsApp ka forwarded joke bhi boring bana deta hai.",
                "pname, your face makes onions cry.",
                "pname, were you born on a highway? Because that’s where most accidents happen.",
                "pname, your voice could ruin a silence.",
                "pname, tu itna lazy hai, tujhe dekhke Kumbhkaran bhi motivate ho gaya.",
                "pname, your secrets are always safe with me. I never even listen when you tell me them.",
                "pname, even your imaginary friends don't want to hang out.",
                "pname, if stupidity had a face, it would borrow yours.",
                "pname, agar beizzati ek career hota, tu CEO hota.",
                "pname, your life is a joke and you're the punchline.",
                "pname, I’d agree with you but then we’d both be wrong.",
                "pname, your smile must be a black hole. It sucks all the joy.",
                "pname, you bring everyone so much joy… when you leave the room.",
                "pname, tu itna fake hai, China mein ban gaya hoga.",
                "pname, you're proof that evolution can go in reverse.",
                "pname, your existence is like a software update – unnecessary and annoying.",
                "pname, you're the reason aliens don't visit us.",
                "pname, tu toh vo bhi copy karega jo blank page hai.",
                "pname, you have something on your shoulder. Oh, it’s just your ego.",
                "pname, you light up the room… by leaving it.",
                "pname, agar akal bikti hoti, tu phir bhi afford nahi kar pata.",
                "pname, your birth certificate is an apology letter from the hospital.",
                "pname, you're like a broken pencil… pointless.",
                "pname, tu toh chappal bhi bina reason ke ghis deta hai.",
                "pname, you have something on your lip – oh wait, that’s just regret.",
                "pname, your brain took a day off… permanently.",
                "pname, even Siri avoids you.",
                "pname, your face has been through a lot… and none of it good.",
                "pname, tu itna boring hai ki alarm clock bhi tujhe ignore karta hai.",
                "pname, you have two brain cells – and they're fighting for dominance.",
                "pname, your laugh sounds like Windows error.",
                "pname, agar awkwardness ka award hota, tu har baar jeetta.",
                "pname, you’re like a browser with 100 tabs open and nothing is loading.",
                "pname, tu duniya ka pehla insaan hai jisko mute pe bhi ignore karna padta hai.",
                "pname, you're like a software bug. No one can figure you out, and everyone wants you gone.",
                "pname, your thoughts are like expired coupons – worthless.",
                "pname, tera attitude toh iPhone jaisa hai, par kaam Nokia jaise.",
                "pname, you're the type who claps when the plane lands.",
                "pname, even Google can't help you now.",
                "pname, you bring new meaning to “useless”.",
                "pname, tujhe dekhke toh Facebook bhi “block” ka option dhoondhne lage.",
                "pname, you weren’t just dropped as a baby, you were thrown.",
                "pname, your best quality is... never mind.",
                "pname, tu itna annoying hai ki mosquito bhi tujhe avoid kare.",
                "pname, if you had a dollar for every smart thing you said, you’d still be broke.",
                "pname, the only thing you run is your mouth.",
                "pname, your jokes are like expired milk – sad and smelly.",
                "pname, tera dimaag recharge se pehle hi khatam ho gaya.",
                "pname, you’re the reason mirrors break.",
                "pname, if you had a twin, it would be your competition in stupidity.",
                "pname, tu WhatsApp group ka vo banda hai jisko sab mute kar dete hain.",
                "pname, I’d roast you more, but I’m afraid I’ll burn myself on your stupidity.",
                "pname, you’re like a puzzle with missing pieces.",
                "pname, even AI can’t simulate your stupidity.",
                "pname, you're so slow, snails send you motivational quotes.",
                "pname, if you were a vegetable, you'd be a 'cabbage head'.",
                "pname, you’re not the sharpest knife in the drawer – more like a spoon.",
                "pname, tu toh Google Translate ka bhi dimaag ghooma de.",
                "pname, your presence is like lag in a gaming session – annoying and unnecessary.",
                "pname, you’re like a power cut – everyone sighs when you show up.",
                "pname, your self-confidence is admirable… considering the circumstances.",
                "pname, your humor is so dry, it could start a forest fire.",
                "pname, even your shadow walks away from you.",
                "pname, you make silence awkward.",
                "pname, you could win gold in overthinking and silver in doing nothing.",
                "pname, your fashion sense is a crime scene.",
                "pname, tera swag Windows XP jaisa outdated hai.",
                "pname, you’ve mastered the art of making everything weird.",
                "pname, you’re not a snack, you’re the expired one in the back of the fridge.",
                "pname, your brain is buffering… forever.",
                "pname, you should wear a helmet… just in case a thought occurs.",
                "pname, tu inspiration hai – bas ulta.",
                "pname, even clowns say, “That’s too much.” when they see you.",
                "pname, you’re a walking cringe compilation.",
                "pname, if dumb was a job, you’d be the boss.",
                "pname, even Bluetooth won’t connect with your vibe.",
                "pname, you’re like a notification that never goes away.",
                "pname, tera hairstyle dekhke toh WiFi bhi signal lose kar de.",
                "pname, you're so fake, Barbie is jealous.",
                "pname, you're like a 404 error – not found in any logic.",
                "pname, tera logic bhi Netflix ka free trial jaise hai – khatam hone wala.",
                "pname, your WiFi password is probably 'ilovestupidity'.",
                "pname, your luck is so bad, even mirrors break when you look at them.",
                "pname, if cringe was an Olympic sport, you'd take gold, silver, and bronze.",
                "pname, you're the side effect mentioned in every medicine.",
                "pname, if brains were taxed, you'd get a refund.",
                "pname, you have something between your ears – a lot of air.",
                "pname, even silence wants distance from you.",
                "pname, your whole life is an unsaved Word document.",
                "pname, your confidence is higher than your IQ.",
                "pname, you are proof that natural selection still has a long way to go.",
                "pname, tera sense of humor ICU mein hai.",
                "pname, you make Monday mornings feel exciting."
            ];
            const randomLine = roastLines[Math.floor(Math.random() * roastLines.length)];
            const roasted = randomLine.replace(/pname/gi, pname.value.trim());

            output.value = roasted;
            console.log(`Roasting ${pname.value.trim()}: ${roasted}`);
        }

    }

    return (
        <div className="Getstartdesign">
            <section className="section">
                <div className="Getstartpage-design">
                    <h1>&nbsp;&nbsp; Welcome to TimePass Web App.</h1>
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
                    <input
                        placeholder="Enter your name/interests"
                        id="personname"
                        type="text"
                    /><br />
                    <button onClick={generateRoast}>Generate Lines</button>
                    <textarea id="roastoutput" readOnly rows={6}></textarea>
                </div>
            </section>


            <section className="section">
                <div className="Minigames">
                    <h3>🎮 Mini Games</h3>
                    <div className="Minigames-section">
                        <ul>
                            <li className="game-item game-1" >Tic Tac Toe
                                <button onClick={tictactoe}> Play </button>
                            </li>
                            <li className="game-item game-2"  onClick={()=>navigate('/RPSgame')}>Rock Paper Scissors
                            <button>Play with AI</button></li>
                            <li className="game-item game-3" >Typing Speed Test 
                                <button>Start Test</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Getstart;
