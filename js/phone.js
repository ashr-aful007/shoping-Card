function updatephoneValue(isIncrease){
     const phoneInputFild = document.getElementById('phone-number-fild');
     const phoneInputFildSting = phoneInputFild.value;
     const phoneInputFildValue = parseFloat(phoneInputFildSting);
  
     let newPhoneValue;
     if(isIncrease == true){
          newPhoneValue = phoneInputFildValue + 1;
     }
     else{
          newPhoneValue = phoneInputFildValue - 1;
     }
     phoneInputFild.value = newPhoneValue;
     return newPhoneValue;
     
}

function totalPhonePrice(newPhoneValue){
   const totalPhonePrice =  newPhoneValue * 1219;

   const displaytotal = document.getElementById('phonePriceTotal');
   displaytotal.innerText = totalPhonePrice; 

}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
  
    const newPhoneValue = updatephoneValue(true);
     totalPhonePrice(newPhoneValue)
     calculateSubtotal()

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  
   const newPhoneValue =  updatephoneValue(false);
   totalPhonePrice(newPhoneValue)
   calculateSubtotal()

})