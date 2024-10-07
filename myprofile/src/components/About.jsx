import './About.css';
import memoImage from '../assets/미모지윙크.png';

const About = () => {
    return (
    <div className="about-container">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-content">
        {/* 왼쪽 프로필 섹션 */}
        <div className="profile-section">
            <img className='profile-image' src={memoImage} alt='Profile Memoji' />
            <h2 className="profile-name">KIM <span className="highlight2">MINJU</span></h2>
            <p className="profile-contact">
            <i className="fas fa-phone"></i> 010-9233-5190 <br />
            <i className="fas fa-envelope"></i> rlaalswb0523@naver.com <br />
            <i className="fas fa-map-marker-alt"></i>
            </p>
        </div>

        {/* 오른쪽 정보 섹션 */}
        <div className="info-section">
            <div className="info-block">
            <h3>EDUCATION</h3>
            <p>숭실대학교 산업정보시스템공학과</p>
            <p>2022 ~ </p>
        </div>

        <div className="info-block">
            <h3>WORK</h3>
            <p></p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>SKILLS</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>ACTIVITIES</h3>
            <p></p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>WORK SPACE</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        </div>
    </div>
    </div>
    );
};

export default About;
