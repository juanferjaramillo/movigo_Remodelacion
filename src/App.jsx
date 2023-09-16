import movigo from "./assets/movigo.jpg";
function App() {
  return (
    <>
      <div
      style={{ position: "fixed" }}
      >
        <img
          // height={400}
          // width={"100%"}
          height={"100%"}
          src={movigo}
        />
      </div>

      <div
      style={{ position: "fixed" }}
      >
        <h1
        style ={{marginTop: 150, marginLeft:"30vw"}}
        >Página en Remodelación</h1>
        <h2
        style ={{marginLeft:"30vw"}}
        >Pronto volveremos!</h2>

        </div>
    </>
  );
}
export default App;
