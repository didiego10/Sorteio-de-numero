function generateNumber(){
    

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    if(min >= max){
        alert("o valor Minimo tem que ser menor que o Maximo")
    } else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
    }

    
}