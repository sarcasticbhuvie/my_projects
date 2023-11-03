const btn=document.querySelectorAll(".btn")
const body=document.querySelector("body")
btn.forEach((b)=>{
    // console.log(b.id);
    b.addEventListener('click',function(e){
        console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.class); //its is not working
        if(e.target.id==="red")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="gray")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="green")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="white")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="black")
        {
            body.style.backgroundColor=e.target.id;
        }
    });
});