// import { useRef, useState } from 'react';
// import CoolUnderline from '../components/CoolUnderline';
import './02scene.css'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import lakeUrl from '../assets/scenes/lake.png'
import angelUrl from '../assets/scenes/angel.png'
import shirtUrl from '../assets/scenes/shirt.png'
import { useEffect } from 'react';

export default function Scene_02({ next }) {

  gsap.registerPlugin(Draggable) 


  useEffect(()=>{
      Draggable.create('.angel-layer', {
      type: 'y',
      inertia: true
    });

    Draggable.create('.shirt-layer', {
      inertia: true
      
    });


  })



  return (
    <section className="scene-02 scene">

      <img src={lakeUrl} alt="lake Scene" className="scene-layer bg-layer" />

      <img src={angelUrl} alt="angel" className="scene-layer angel-layer" />

      <img src={shirtUrl} alt="shirt" className="scene-layer shirt-layer" />

      <div className='scene-layer text-layer'>
        <div>where we pull the bodies out of the lake</div>
        <div>and dress them in warm clothes again.</div>
        <button onClick={next}>Next Scene</button>
      </div>
      

    </section>
  );
}