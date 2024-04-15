import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','N', 'i', 'k', 'h', 'i', 'l', ',']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>  
                {/* <h1>Hi, I'm <br/> */}
                {/* <img src={LogoSubtitle} alt='developer' /> */}
                {/* <span className='myName'>Nikhil</span> */}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                {/* web developer */}
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / Python Expert </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home