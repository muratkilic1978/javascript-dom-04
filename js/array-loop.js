let ingredientsElem = document.querySelectorAll(".message li");

for(let i = 0; i < ingredientsElem.length; i++){
    console.log(ingredientsElem[i].textContent);
    if (i%2 == 0){
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


