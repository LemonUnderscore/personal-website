import { profile, cv } from './assets/index';
import './App.scss';

function App() {
  return (
    <div className="App">
        <div id="mainWrapper">
            <div id="sideBar">
                <div id="navBox">
                    <div id="pageTitle">
                        <h1>Conor Clerkin</h1>
                        <h3>@LemonUnderscore</h3>
                    </div>
                    <div id="mediaLinks">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/LemonUnderscore" className="Link-1">Github</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/LemonUnderscore" className="Link-3">Youtube</a>
                    </div>
                    <ul id="navList">
                        <li><a href="mailto:cnr.clerkin@gmail.com">cnr.clerkin@gmail.com</a></li>
                    </ul>
                    
                </div>
                <div id="profileWrapper">
                    <img src={ profile } alt="Profile"/>
                    <p>Computer Applications & Software Engineering Graduate,
                    Dublin City University</p>
                </div>
                <div id="sideFooter">
                    <p> > Updated May 2022</p>
                </div>
            </div>
            <div id="contentWrapper">
                <div id="mainContent">
                    <h1>
                      <a target="_blank" rel="noopener noreferrer" href={cv}>Download CV</a>
                    </h1>
                    <h2>> Proficient Skills & Tools</h2>
                        <ul>
                          <li>Python</li>
                          <li>JavaScript</li>
                          <li>React</li>
                          <li>SQL</li>
                          <li>HTML5, CSS3</li>
                          <li>Adobe Photoshop, Premiere Pro</li>
                        </ul>
                      <h2>> Familiar Skills & Tools</h2>
                        <ul>
                        <li>C#</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>TypeScript</li>
                        <li>Azure DevOps</li>
                        <li>AWS Lambda, Lightsail, DynamoDB</li>
                        <li>PostgreSQL</li>
                        <li>Firebase</li>
                        <li>React Native</li>
                        <li>Expo</li>
                        <li>OpenCV</li>
                        <li>Assembly</li>
                        <li>Unity</li>
                        <li>Blender</li>
                        <li>A-Frame</li>
                        </ul>
                    <h2>> Previous Personal Projects</h2>
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
                </div>
            </div>
        </div>
    </div>
);
}

export default App;
