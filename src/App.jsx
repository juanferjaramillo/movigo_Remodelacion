import movigo from "./assets/movigo.jpg";
function App() {
  return (
    <>
      <div>
        <img
          // height={400}
          width={"100%"}
          src={movigo}
          style={{ position: "fixed" }}
        />

<div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          // left: "20vw",
          // bottom: "50",
          marginTop: "20%",
          left: "30vw"
        }}
      >
        <h1 style={{ fontSize: "5vw" }}>Página en remodelación</h1>
        <h1 style={{ fontSize: "3vw" }}>Pronto volveremos!</h1>
      </div>


      </div>
     
    </>
  );
}
export default App;
