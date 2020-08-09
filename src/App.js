import React from 'react';
import './App.scss';
import { profile } from './assets/images/index';

class App extends React.Component {

    state = {
        page: ""
    }

    render() {
        return (
            <div className="App">
                <div id="mainWrapper">
                    <div id="sideBar">
                        <div id="navBox">
                            <div id="pageTitle">
                                <h1>Conor Clerkin</h1>
                                <h3>@LemonUnderscore</h3>
                            </div>
                            <ul id="navList">
                                <li><a href="mailto:cnr.clerkin@gmail.com">cnr.clerkin@gmail.com</a></li>
                                <li><a href="tel:+353892573462">+353 89 257 3462</a></li>
                            </ul>
                            <div id="mediaLinks">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/LemonUnderscore" className="Link-1">Github</a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/LemonUnderscore" className="Link-2">Twitter</a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/LemonUnderscore" className="Link-3">Youtube</a>
                                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/lemonunderscore" className="Link-4">Spotify</a>
                            </div>
                        </div>
                        <div id="profileWrapper">
                            <img src={ profile } alt="Profile"/>
                            <p>Computer Applications Student,
                            Dublin City University</p>
                        </div>
                        <div id="sideFooter">
                            <p> > Updated August 2020</p>
                        </div>
                    </div>
                    <div id="contentWrapper">
                        <div id="mainContent">
                            <h2>> Highlighted Projects</h2>
                            <ul>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://lemonunderscore.github.io/tabletop-dicetray/">Tabletop Dice-Tray - React Web-App  (Link)</a>
                                    <ul>
                                        <li>A simple React App that I created to become familiar with React.</li>
                                        <li>Uses as few packages as possible.</li>
                                        <li>Dice icons are custom made.</li>
                                        <li>Features:</li>
                                        <ul>
                                            <li>Roll any number of animated polyhedral dice.</li>
                                            <li>Remove or re-roll dice in-place.</li>
                                            <li>Input for total modifier and custom-sized dice.</li>
                                        </ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/LemonUnderscore/tabletop-dicetray">Github Repo Link</a></li>
                                    </ul>    
                                </li>
                            </ul>
                            <h2>> Skills</h2>
                                <ul>
                                    <li>Front-end languages and tools.</li>
                                    <li>Focused on web-design and web-technologues.</li>
                                    <li>Proficient with object-ordiented programming.</li>
                                    <li>Languages:</li>
                                        <ul>
                                            <li>Proficient With:</li>
                                            <ul>
                                                <li>JavaScript, Sass, HTML5, CSS3</li>
                                            </ul>
                                            <li>Comfortable with:</li>
                                            <ul>
                                                <li>Python, Java</li>
                                            </ul>
                                            <li>Learning:</li>
                                            <ul>
                                                <li>C#</li>
                                            </ul>
                                        </ul>
                                    <li>Tools:</li>
                                        <ul>
                                            <li>React</li>
                                            <li>Git</li>
                                        </ul>
                                </ul>
                            <h2>> About Me</h2>
                            <ul>
                                <li>Hobbies:</li>
                                <ul>
                                    <li>Avid Dungeons & Dragons player.</li>
                                    <li>Occasional writer.</li>
                                    <li>Previously Top 500 in European Overwatch</li>
                                    <li>Currently playing competitive Team Fortress 2</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );};
}

export default App;