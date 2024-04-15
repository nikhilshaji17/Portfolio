import './index.scss'
import GreenLogo from "../../../assets/images/NGreen.svg"
import {useEffect, useRef} from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {

    // const bgRef = useRef();
    // const outlineLogoRef = useRef();
    // const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline().to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1
    //     })
    //     .from(outlineLogoRef.current, {
    //         drawSVG: 0,
    //         duration: 20
    //     })

    //     gsap.fromTo(
    //         solidLogoRef.current, {
    //             opacity: 0,
    //         }, 
    //         {
    //             opacity: 1,
    //             delay: 1,
    //             duration: 4,
    //         }
    //     )
    // }, [])

        const bgRef = useRef();
        const outlineLogoRef = useRef();
        const solidLogoRef = useRef();
    
        useEffect(() => {

        if (!bgRef.current || !outlineLogoRef.current || !solidLogoRef.current) {
            return;
        }
    
        const bgElement = bgRef.current;
        const outlineLogoElement = outlineLogoRef.current;
        const solidLogoElement = solidLogoRef.current;
    
        // Animation for background opacity
        bgElement.style.transition = "opacity 1s";
        bgElement.style.opacity = "1";
    
        // Animation for drawing the outline logo
        outlineLogoElement.style.transition = "stroke-dashoffset 20s linear";
        outlineLogoElement.style.strokeDasharray = outlineLogoElement.getTotalLength();
        outlineLogoElement.style.strokeDashoffset = outlineLogoElement.getTotalLength();
    
        // Triggering the outline drawing animation after a delay
        setTimeout(() => {
            outlineLogoElement.style.strokeDashoffset = "0";
        }, 0);
    
        // Animation for solid logo opacity
        solidLogoElement.style.transition = "opacity 4s";
        solidLogoElement.style.opacity = "1";
    
        // Clean up transitions after animation completion
        return () => {
            bgElement.style.transition = "";
            outlineLogoElement.style.transition = "";
            solidLogoElement.style.transition = "";
        };
    }, [bgRef, outlineLogoRef, solidLogoRef]);

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={GreenLogo} alt="N"/>
            <svg  
                width='559pt'
                height="897pt"
                version='1.0'
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 150 150"
            > 
                <g 
                    className='svg-container'
                    transform="translate(0 457) scale(.1 -.1)"
                    fill='none'
                >
                    <path >
                    </path>        
                </g>
            </svg>
        </div>
    )
}

export default Logo