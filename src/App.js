import './App.css';

function App() {
  return (
    <div className="App">
      <div id="h1">
		<h1>Adivina el Color<br/><span id="colorDisplay"></span></h1>
	</div>
	<div id="stripe">
		<button id="reset" /*onClick={reset}*/>Nuevos Colores</button>
		<span id="message"></span>
		<button id="easy" /*onClick={easy}*/>Facil</button>
		<button className="selected" id="hard" /*onClick={hard}*/>Dificil</button>
	</div>
	<div className="container">
		<div className="square" id="1"></div>
		<div className="square" id="2"></div>
		<div className="square" id="3"></div>
		<div className="square" id="4"></div>
		<div className="square" id="5"></div>
		<div className="square" id="6"></div>
	</div>
    </div>
  );
}

export default App;
