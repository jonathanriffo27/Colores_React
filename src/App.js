import './App.css';
import {useState, useEffect} from 'react';
import coloress from "./componentes/logica";
import Cuadrado from "./componentes/cuadrado";

function App() {
  let num=6;
  let pickedColor = "";

  const [cuadrados, setCuadrados] = useState([1,2,3,4,5,6]);

  const [colores, setColores] = useState([])

  useEffect( () => {
    setColores(coloress(num))
  }, [num])

  function pick(){
    pickedColor = pickColor();
    // evento();
  }
  // function evento(){
  //   for(let i=0;i<cuadrados.length;i++){
  //     cuadrados[i].addEventListener("click",function(){
  //       let clickedColor=this.style.backgroundColor;
  //       if(clickedColor!==pickedColor){
          // this.style.backgroundColor="#232323";
          // mensaje.innerHTML="Intentalo nuevamente";
        // }else{
          // mensaje.innerHTML="¡Correcto!";
          // h1.style.backgroundColor=pickedColor;
          // changeColors();
          // resetear.innerHTML="¿Jugar de nuevo?";
        // }
      // })
    // }
  // }	
  function pickColor(){
    let random = Math.floor(Math.random()*colores.length);
    return colores[random];
  }
  pick()

  return (
    <div className="App">
      <div id="h1">
		<h1>Adivina el Color<br/><span id="colorDisplay">{pickedColor}</span></h1>
	</div>
	<div id="stripe">
		<button id="reset" /*onClick={reset}*/>Nuevos Colores</button>
		<span id="message"></span>
		<button id="easy" /*onClick={easy}*/>Facil</button>
		<button className="selected" id="hard" /*onClick={hard}*/>Dificil</button>
	</div>
	<div className="container">
    {
      cuadrados.map((square,indice) => {
        return <Cuadrado className="square" id={indice} key= {indice} color={colores[indice]}
        />
    })
    }
	</div>
    </div>
  );
}

export default App;
