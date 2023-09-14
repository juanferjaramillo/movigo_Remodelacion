import movigo from "./assets/movigo.jpg";
function App() {
  return (
    <div>
      <img
        // height={400}
        width={"100%"}
        src={movigo}
        style={{position:"relative"}}
      />

      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          // left: "20vw",
          bottom: "50vh",
        }}
      >
        <span style={{fontSize:60}}>Página en remodelación</span>
        <span style={{fontSize:40}}>Pronto volveremos!</span>
      </div>
    </div>
  );
}
export default App;
