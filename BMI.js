let form = document.querySelector("form")
form.addEventListener("submit", e =>{
    e.preventDefault();
    let height =document.querySelector("#height").value; 
    let weight =document.querySelector("#weight").value;
    let result =document.querySelector("#result"); 
    if(height == "" || isNaN(height) || height<=0){
        result.innerHTML = "enter a valid data"
    } else if(weight == "" || isNaN(weight) || weight<=0){
        result.innerHTML = "enter a valid data"
    }
    else{
        let bmi= (weight / ((height*height)/1000)).toFixed(2)
        result.innerHTML=bmi
        if(bmi<16){
            result.innerHTML="Severe Thickness "+ bmi
        }else if(bmi>=16 || bmi<=17){
            result.innerHTML="Moderate Thickness "+ bmi
        }else if(bmi>17 || bmi<=18.5){
            result.innerHTML="Mid Thickness "+ bmi
        }else if(bmi>18.5 || bmi<=25){
            result.innerHTML="Normal "+ bmi
        }else if(bmi>25 || bmi<=30){
            result.innerHTML="Overweight "+ bmi
        }else if(bmi>30 || bmi<=35){
            result.innerHTML="Obese Class I "+ bmi
        }else if(bmi>35 || bmi<=40){
            result.innerHTML="Obese Class II "+ bmi
        }else {
            result.innerHTML="Obese Class III "+ bmi
        }
    }
})