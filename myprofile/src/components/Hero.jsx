import './Hero.css';
import memoImage from '../assets/미모지윙크.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>안녕하세요!</h1>
                <h2>제 이름은 <span className="highlight1">김민주</span>입니다.</h2>
                <h3>오늘 저녁 메뉴가 고민이네요.</h3>
                    <img className='hero-image' src={memoImage} alt='Profile Memoji' />
                <button className="hero-button">Go!</button>
            </div>
        </section>
    );
}

export default Hero;

