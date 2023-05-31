const buttons = document.querySelectorAll(".btn")
const result = document.querySelector("#result")
 buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e )
        result.textContent += e.target.id
    })
 })
 equal.addEventListener('click',()=>{
    if(SyntaxError){
        result.textContent = "SyntaxError"
    }else
    result.textContent = eval(result.textContent)
 })
clear.addEventListener('click',()=>{
    
    result.textContent = ""
})
//___________________________
