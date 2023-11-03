let btn=document.querySelector("button")
let msg=document.querySelector("h4")
let flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="red"
        msg.innerHTML="Now you are friend"
        msg.style.color="green"
        flag=1
    }
    else{
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor="rgb(65, 68, 247)"
        msg.innerHTML="Friend Suggestion"
        msg.style.color="red"
        flag=0
    }
})