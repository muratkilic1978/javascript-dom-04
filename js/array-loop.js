let ingredientsElem = document.querySelectorAll(".message li");

for(let i = 0; i < ingredientsElem.length; i++){
    console.log(ingredientsElem[i].textContent);
    if (isEven(i)){
        ingredientsElem[i].style.color = "purple";
        ingredientsElem[i].style.fontSize = "1.1rem";
        ingredientsElem[i].style.listStyleType = "circle";
    }        
    else{
        ingredientsElem[i].style.color = "#7d6a49";
        ingredientsElem[i].style.fontSize = "1.1rem";
        ingredientsElem[i].style.listStyleType = "square";
    }
    
}

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}
