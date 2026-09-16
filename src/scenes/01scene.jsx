import { useRef } from 'react';
import './01scene.css'
import gsap from 'gsap';

export default function Scene_01({ next }) {
    // iniate variables
    const tellRef = useRef(null) 
    const dreamRef = useRef(null)

    gsap.ticker.fps(6); // wow u can change 'fps' in gsap


    // function to animate the 'tell me' text falling 
    const handleTellFall = () => {
        gsap.to(tellRef.current,{
            y: 120,
            rotation: -6,
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
        })
    }

    // function to animate the 'dream' text falling
    const handleDreamFall = () => {
        gsap.to(dreamRef.current,{
            y: 120,
            rotation: 6,
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
        })
    }


  return (
    <section className="scene scene-01">
      <div>
        <span 
        id='tell'
        ref={tellRef} // set variable
        onClick={handleTellFall} // call handleTellFall on click
        >tell me</span> 
    
      {' '}about the {' '}
      
      <span 
      id='dream'
      ref={dreamRef} // set variable
      onClick={handleDreamFall} // call handleDreamFall on click
      >dream</span>
        </div>
      {/* <button onClick={next}>Next Scene</button> */}
    </section>
  );
}