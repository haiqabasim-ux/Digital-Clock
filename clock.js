function clock(){
let now =new Date();
let hours1 = now.getHours();
//let hour=now,getHours();
let minuets = now.getMinutes();
let sec= now.getSeconds();
document.getElementById('h1').innerHTML= `${hours1}: ${minuets}: ${sec}`;
}
setInterval(clock,1000);
clock();