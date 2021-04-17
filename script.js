let tipCalculateForm = document.querySelector('.tipCalculateForm'),    
    otherPercent = document.getElementById("otherPercent");        
    otherPercent.style.display = "none";

let selectPercent = () => {
    percent = document.getElementById("percent").value;

    if(percent === "other"){        
        otherPercent.style.display = "block";
        percent = document.getElementById("otherPercent").value;
    } else{
        percent = document.getElementById("percent").value;
    }
    return percent;
}

const calculate = e => {    
    e.preventDefault();    
    let billAmount = Number(document.getElementById("billAmount").value);    
    let noPersons = document.getElementById("noPersons").value;
    let result = document.querySelector(".result");

    if(billAmount && noPersons){    
        let tipAmount = billAmount * (selectPercent() / 100);
        let totalAmount = billAmount + tipAmount;
        let shareAmount = (totalAmount / noPersons).toFixed(2);

        result.innerHTML = `Total Amount including Tip is = ${totalAmount} <br />
                            Each Person Share Amount is = ${shareAmount}`;
    }
    else{
        result.innerHTML = `Please, fill all the fileds and Calculate.`
    }
    document.getElementById("billAmount").value = '';
    document.getElementById("noPersons").value = '';
    document.getElementById("percent").value = '';
    otherPercent.style.display = "none";
}

tipCalculateForm.addEventListener('submit', calculate);