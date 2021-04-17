let formPercentage = document.querySelector(".formPercentage"),
    firstInput = document.getElementById("firstInput"),
    secondInput = document.getElementById("secondInput");

formPercentage.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let firstInputValue = parseFloat(firstInput.value);
    let secondInputValue = parseFloat(secondInput.value);
    if(firstInputValue && secondInputValue){
        let answer = (firstInputValue/secondInputValue * 100).toFixed(2);
        document.querySelector(".answer").innerHTML = `Answer: <span>${firstInputValue}</span> is the <span>${answer}</span> % of <span>${secondInputValue}</span>`;
    }
    else{
        alert("Fill the Fields");
    }
    firstInput.value = "";
    secondInput.value = "";
})    