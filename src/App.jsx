import { useState } from 'react';
import './App.css';
import Scene_01 from './scenes/01scene';
import Scene_02 from './scenes/02scene';
import Scene_03 from './scenes/03scene';

export default function App() {
  const [scene, setScene] = useState(1);

  return (
    // global components can go hereeee
    <div className="film-jitter">
      {scene === 1 && <Scene_01 next={() => setScene(2)} />}
      {scene === 2 && <Scene_02 next={() => setScene(3)} />}
      {scene === 3 && <Scene_03 next={() => setScene(1)} />}
    </div>
  );
}