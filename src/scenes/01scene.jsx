export default function Scene_01({ next }) {
  return (
    <section className="scene">
      <div>tell me about the dream</div>
      <button onClick={next}>Next Scene</button>
    </section>
  );
}