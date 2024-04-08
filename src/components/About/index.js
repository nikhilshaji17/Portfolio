import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5,  faJs,  faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['A', 'b', 'o', 'u', 't',' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I'm a very ambitious developer, with a natural inclination to web development looking for a role in 
                    an established IT company with the opportunity to work with the latest 
                    technologies on challenging and diverse projects
                </p>
                <p>I'm quietly confident, naturally curious, meticulous and always working 
                    to keep ahead of the competition     
                </p>
                <p>If I had to summarise myself in a single sentence, it would be a hardworking, driven, 
                    calm and confident human who's tech-obssessed!
                </p>
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNode} color='#00E98D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About