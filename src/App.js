import "./App.css";
import { useState, useEffect } from "react";
import coloress from "./componentes/logica";
import Cuadrado from "./componentes/cuadrado";
import Elegido from "./componentes/pick"

function App() {
  let num = 6;

  const [cuadrados, setCuadrados] = useState([1, 2, 3, 4, 5, 6]);

  const [elegido, setElegido] = useState("");

  const [boton, setBoton] = useState("Nuevos Colores");

  const [mensaje, setMensaje] = useState("");

  const [h1, setH1] = useState("232323");

  const [colores, setColores] = useState([]);
  
  useEffect(() => {
    let colors = coloress();
    setColores(colors);
    setElegido(Elegido(colors))
    setCuadrados(colors)
  }, []);

  const actualizar = (id, color) => {
    setCuadrados(arr => {

      if(arr[id]===elegido){
        for(let i=0;i<arr.length;i++){
          arr[i]=elegido;
        }
				setH1(elegido);
        setMensaje("¡Correcto!")
        setBoton("¿Jugar de nuevo?")
			}else{
        arr[id]="#232323";
        setMensaje("Intentalo nuevamente")
			}
      return [...arr]
    })
  }
  const reset = () => {
    let colors = coloress();
    setColores(colors);
    setElegido(Elegido(colors))
    setCuadrados(colors)
    setH1("#232323");
    setMensaje("")
    setBoton("Nuevos colores")
  }

  return (
    <div className="App">
      <div id="h1" style={{ backgroundColor: h1 }}>
        <h1>
          Adivina el Color
          <br />
          <span id="colorDisplay">{elegido}</span>
        </h1>
      </div>
      <div id="stripe">
        <button id="reset" onClick={reset}>{boton}</button>
        <span id="message">{mensaje}</span>
        <button id="easy" /*onClick={easy}*/>Facil</button>
        <button className="selected" id="hard" onClick={reset}>
          Dificil
        </button>
      </div>
      <div className="container">
        {cuadrados.map((square, indice) => {
          return (
            <Cuadrado
              onClick={actualizar}
              className="square"
              id={indice}
              key={indice}
              color={square}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
