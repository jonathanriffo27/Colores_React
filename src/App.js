import "./App.css";
import { useState, useEffect } from "react";
import coloress from "./componentes/logica";
import Cuadrado from "./componentes/cuadrado";
import Elegido from "./componentes/pick"

function App() {

  const [cuadrados, setCuadrados] = useState([]);
  const [inicio, setInicio] = useState(6);
  const [elegido, setElegido] = useState("");
  const [boton, setBoton] = useState("Nuevos Colores");
  const [mensaje, setMensaje] = useState("");
  const [h1, setH1] = useState("232323");
  const [contador, setContador] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    let colors = coloress(inicio);
    setElegido(Elegido(colors))
    setCuadrados(colors)
    setH1("#232323");
    setMensaje("")
    setBoton("Nuevos colores")
  }, [inicio]);

  useEffect(() => {
    let interval = null;
    if (isActive === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const actualizar = (id, color) => {
    setCuadrados(arr => {
      if(mensaje !== "¡Correcto!"){
        setContador(contador + 1)
      }
      if(arr[id]===elegido){
        for(let i=0;i<arr.length;i++){
          arr[i]=elegido;
        }
				setH1(elegido);
        setMensaje("¡Correcto!")
        setBoton("¿Jugar de nuevo?")
        setIsActive(true)
			}else{
        arr[id]="#232323";
        setMensaje("Intentalo nuevamente")
			}
      return [...arr]
    })
  }
  function reset(){
    let colors = coloress(inicio);
    setElegido(Elegido(colors))
    setCuadrados(colors)
    setH1("#232323");
    setMensaje("")
    setBoton("Nuevos colores")
    setContador(0)
    setTime(0);
    setIsActive(false)
  }

  const facil = ()=> {
    setInicio(3)
    reset();
  }
  const dificil = ()=> {
    setInicio(6)
    reset();
  }

  return (
    <div className="App">
      <div id="h1" style={{ backgroundColor: h1 }}>
        <h1>
          Adivina el Color
          <br />
          <span id="colorDisplay">{elegido}</span>
          <br />
          <span className="movimientos">Movimientos: </span> <span className="digits">{contador} </span>
          <span className="movimientos"> - Tiempo: </span>
          <span className="digits">{("0" + Math.floor((time / 1000) % 60)).slice(-2)} s </span>
        </h1>
      </div>
      
      <div id="stripe">
        <button id="reset" onClick={reset}>{boton}</button>
        <span id="message">{mensaje}</span>
        <button id="easy" onClick={facil}>Facil</button>
        <button className="selected" id="hard" onClick={dificil}>
          Dificil
        </button>
      </div>
      <div className="container">
        <div className="cuadros">
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
    </div>
  );
}

export default App;
