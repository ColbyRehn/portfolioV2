import './home.scss';
import linkdinIcon from '../../assets/linkdin.svg';
import githubIcon from '../../assets/github.svg';
import gmailIcon from '../../assets/gmail.svg';
import pfp from './assets/pfp.webp';
import scrollDown from './assets/scrollDown.svg';

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
                    <a aria-label="Open new tab to Colby's Linkdin page" href="https://www.linkedin.com/in/colby-rehn-60033921b/" target="_blank" rel="noreferrer">
                        <img src={linkdinIcon} alt="White Linkdin Icon" />
                    </a>
                    <a aria-label="Open new tab to Colby's Github page" href="https://github.com/ColbyRehn" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="White Github Icon" />
                    </a>
                    <a aria-label="Email Colby" href="mailto:rehn.colby@gmail.com" target="_blank" rel="noreferrer">
                        <img src={gmailIcon} alt="White Gmail Icon" />
                    </a>
                </div>
            </div>
            <img src={pfp} alt="Colby Rehn smiling infront of pink and purple roses" />
            <img id="scroll-down" src={scrollDown} alt="Arrow point down" />
        </section>
    );
}

export default Home;