import React from "react";
import './home.scss';
import linkdinIcon from '../../assets/linkdin.svg';
import githubIcon from '../../assets/github.svg';
import gmailIcon from '../../assets/gmail.svg';
import pfp from '../../assets/pfp.png';
import scrollDown from '../../assets/scrollDown.svg';

const Home = () => {

    return (
        <section id="home-section">
            <div id="info">
                <div className="col">
                    <p>Hello, I am</p>
                    <h1>Colby Rehn</h1>
                    <p>a software engineer student</p>
                </div>
                <div className="icon-row">
                    <img src={linkdinIcon} />
                    <img src={githubIcon} />
                    <img src={gmailIcon} />
                </div>
            </div>
            <img src={pfp} />
            <img id="scroll-down" src={scrollDown} />
        </section>
    );
}

export default Home;