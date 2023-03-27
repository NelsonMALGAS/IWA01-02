const number=document.querySelector('[data-key="number"]')
const subtract=document.querySelector('[data-key="subtract"]')
const add=document.querySelector('[data-key="add"]')
const MIN_NUMBER=0

const addHandler=()=>{
    const newValue=parseInt(number.value)+1
    number.value = newValue;
   
}
const subtractHandler=()=>{
    const newValue=parseInt(number.value)-1
    number.value = newValue;
    
}

subtract.addEventListener('click' ,subtractHandler)
add.addEventListener('click' ,addHandler)