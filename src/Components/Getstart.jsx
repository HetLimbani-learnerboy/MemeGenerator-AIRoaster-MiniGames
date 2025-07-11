import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Getstartdesgin.css";

const Getstart = () => {
    const navigate = useNavigate();

    return (
        <div className="Getstartdesign">
            <section className="section">
                <div className="Getstartpage-design" >
                    <h1>&nbsp;&nbsp;&nbsp; Welcome to TimePass Web...</h1>
                    <button className="backbuttondesign" onClick={() => navigate('/')}>Back</button></div>
                    <div className="Memesgenerate">
                        <h3>🎭 Meme Generator</h3>
                        <button className="genratememesdesign">Click to generate Memes</button>
                    </div></section>
            <section className="section">
                <div className="Airoasterbot">
                    <h3>🤖 AI Roaster Bot</h3>
                    <input placeholder="Enter your name/interests" /><br />
                    <button>Genrates Lines</button>
                    <textarea></textarea>
                </div></section>
            <section className="section">
            <div className="Minigmaes">
                <h3>🎮 Mini Games</h3>
                <div className="Minigames-section">
                    <ul>
                        <li className="game-1">Tic Tac Toe (with AI)</li>
                        <li className="game-2">Rock Paper Scissors</li>
                        <li className="game-3">Typing Speed Test</li>
                    </ul>
                </div></div></section>
            </div>


    );
    }
export default Getstart;