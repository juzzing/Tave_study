import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>안녕하세요!</h1>
                <h2>제 이름은 <span className="highlight1">김민주</span>입니다.</h2>
                <h3>소통하는 개발자가 되고 싶어요.</h3>
                <div className="hero-image">
                </div>
                <button className="hero-button">Go!</button>
            </div>
        </section>
    );
}

export default Hero;
