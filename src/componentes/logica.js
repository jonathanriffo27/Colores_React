
 function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
  }
  export default function generateRandomColors(num){
    let arr = []
    for(let i=0;i<num;i++){
      arr[i]=randomColor();
    }
    return arr
  }