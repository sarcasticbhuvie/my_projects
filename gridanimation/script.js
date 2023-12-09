// const container = document.querySelector(".container");
// const boxSize=70;
// const area=window.innerHeight * window.innerWidth; 
// // height=749,width=1440,area=1078560
// // console.log(window.innerHeight)
// // console.log(window.innerWidth)
// const boxCount = area/(boxSize * boxSize);
// for(let i=0;i<boxCount;i++){
//     const box=document.createElement("div");
//     box.classList.add("box");
//     box.style.height=boxSize+"px";
//     box.style.width=boxSize+"px";
//     container.appendChild(box);
// }
const container =document.querySelector(".container");
const boxSize=60;
const area=window.innerHeight*window.innerWidth;
const boxCount=area/(boxSize*boxSize);
for(let i=0;i<boxCount;i++){
    const box=document.createElement("div");
    box.classList.add("box");
    box.style.height=boxSize+"px"
    box.style.width=boxSize+"px"
    container.appendChild(box);
}

const loginPage=document.querySelector("#login_content")
const signupPage=document.querySelector("#Signup_content")
const login=document.querySelector("#register-btn");
const signup=document.querySelector("#login-btn");
let flag =0;
login.addEventListener("click",()=>{
    // console.log("Hello")
    if(flag===0){
    loginPage.style.display="none";
    signupPage.style.display="flex";
    flag=1;
    console.log(flag);
    }
})
signup.addEventListener("click",()=>{
if(flag===1){
    loginPage.style.display="flex";
    signupPage.style.display="none";
    flag=0;
    console.log(flag)

}
})