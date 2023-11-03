const form = document.querySelector("form")
const result = document.querySelector("#msg")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const h=document.querySelector("#height").value
    const w=document.querySelector("#weight").value
    console.log(h);
    console.log(w);
    result.innerHTML=`'${h}'is not a valid height</br>`
    result.innerHTML=`'${w}' is not a valid weight`
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    if(height===' ' || height<0||isNaN(height) && weight===' ' || weight<0||isNaN(weight))
    {
        result.innerHTML=`Please enter a valid Height </br> and valid Weight `;
    }
       else if(height===' ' || height<0||isNaN(height))
        {
            result.innerHTML=`Please enter a valid Height`
        }
        else if(weight===' ' || weight<0||isNaN(weight))
        {
            result.innerHTML=` Please enter a valid Weight`
        }
    else{
        const bmi = (weight/((height*weight)/10000)).toFixed(2)
        result.innerHTML=`BMI Score : ${bmi}`
    }
})