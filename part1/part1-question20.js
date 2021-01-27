window.setInterval(print, 1000);
function print(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
