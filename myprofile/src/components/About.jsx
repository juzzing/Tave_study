import './About.css';

const About = () => {
    return (
    <div className="about-container">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-content">
        {/* 왼쪽 프로필 섹션 */}
        <div className="profile-section">
            <div className="profile-image">   
            </div>
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
            <p>내 자취방</p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>SKILLS</h3>
            <p>라면 끓이기</p>
            <p>오므라이스</p>
            <p></p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>ACTIVITIES</h3>
            <p>꿈빛파티시엘</p>
            <p></p>
        </div>

        <div className="info-block">
            <h3>BEST MENU</h3>
            <p>엽기떡볶이</p>
            <p>아이스박스</p>
            <p></p>
            <p></p>
        </div>
        </div>
    </div>
    </div>
    );
};

export default About;
