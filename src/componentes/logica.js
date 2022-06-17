 let coloresRandom = []

 function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
  }
  export default function generateRandomColors(num){
    for(let i=0;i<6;i++){
      coloresRandom[i]=randomColor();
    }
    return coloresRandom
  }