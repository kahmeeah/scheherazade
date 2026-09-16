import { useRef, useState } from 'react';
import CoolUnderline from '../components/CoolUnderline';
import './01scene.css'
import gsap from 'gsap';

export default function Scene_01({ next }) {
    // iniate variables to set later
    const tellRef = useRef(null) 
    const dreamRef = useRef(null)

    // variables to render/mount eles onto DOM
    const [showTellVid, toggle_showTellVid] = useState(false)
    const [showDreamVid, toggle_showDreamVid] = useState(false)

    // variables to check when vids have played thru
    const tellFinished = useRef(false);
    const dreamFinished = useRef(false);

    // function for if both vids have played , go to next scene
    const checkBothDone = () => {
        if(tellFinished.current && dreamFinished.current) {
            next()
        }
    }

    gsap.ticker.fps(6); // wow u can change 'fps' in gsap


    // function to animate the 'tell me' text falling 
    const handleTellFall = () => {
        gsap.to(tellRef.current,{
            y: 120,
            rotation: -6,
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
            onComplete: () => {
                toggle_showTellVid(true)

                setTimeout(()=>{
                    toggle_showTellVid(false)
                    tellFinished.current = true
                    checkBothDone()
                }, 1500) // prolly change to variable or manually set vid length here
            },
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
            onComplete: () => {
                toggle_showDreamVid(true)
                setTimeout(()=>{
                    toggle_showDreamVid(false)
                    dreamFinished.current = true
                    checkBothDone()
                }, 1500) // prolly change to variable or manually set vid length here
            },
        })
    }




  return (
    <section className="scene scene-01">
        <div>
            <CoolUnderline 
            id='tell'
            ref={tellRef} // sets variable to this span element
            onClick={handleTellFall} // call handleTellFall on click
            >tell me
            </CoolUnderline> 
        
            {' '}about the {' '}
            
            <CoolUnderline 
            id='dream'
            ref={dreamRef} // sets variable to this span element
            onClick={handleDreamFall} // call handleDreamFall on click
            >dream
            </CoolUnderline>
        </div>

        {/* display these when showTellVid is true  */}
        {showTellVid && (
             <div className='overlay' id='tellVid'>hi heheheh</div>
        )}


        {/* display these when showDreamVid is true  */}
        {showDreamVid && (
             <div className='overlay' id='dreamVid'>hi dream</div>
        )}



      {/* <button onClick={next}>Next Scene</button> */}
    </section>
  );
}