
function getTextElementValue(elementId){
     const totalPhonePrice = document.getElementById(elementId);
     const totalPhonePriceString = totalPhonePrice.innerText ;
     const totalPhonePriceNumber = parseFloat(totalPhonePriceString);
     return totalPhonePriceNumber;
}

function setElementValueById(elementId, value){
     const SubtotlalElement = document.getElementById(elementId);
     SubtotlalElement.innerText = value;
}

function calculateSubtotal(){
     const currentPhoneTotal = getTextElementValue('phonePriceTotal');
     const CurrentCaseTotal = getTextElementValue('total-Amount');

     const currentSubtotal = currentPhoneTotal + CurrentCaseTotal ; 
     setElementValueById('sub-total', currentSubtotal);
    

//calculate tax
const taxtAmountString = (currentSubtotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxtAmountString);

setElementValueById('tex-total', taxAmount);

const finalAmount = taxAmount + currentSubtotal;

setElementValueById('final-total', finalAmount)
}