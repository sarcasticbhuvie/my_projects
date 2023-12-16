const box=document.querySelector("div");
setInterval(()=>{
    const date=new Date();
    box.innerHTML=`<h1 class="time">${date.toLocaleTimeString()}</h1>`
    
},1000)