/***
 * add event listener to the plus button
 * get the value inside the case number field(input field)
 * convert the number to an integer
 * calculate the new case number
 * set the value to the case number fild
 */

function updateCaseNumber(isIncrease){
     const caseInput =  document.getElementById('case-input-fild');
     const caseNumberString = caseInput.value;
     const caseNumber = parseFloat(caseNumberString);   

     let newCaseNumber;
     if(isIncrease == true){
          newCaseNumber = caseNumber + 1;
     }
     else{
          newCaseNumber = caseNumber - 1;
     }
     caseInput.value = newCaseNumber;
     return newCaseNumber;
}


function updateAmount(newCaseNumber){
     const caseTotlaPrice = newCaseNumber * 59 ;
     const totlCaseAmount = document.getElementById('total-Amount');
     totlCaseAmount.innerText = caseTotlaPrice;

}


document.getElementById('btn-case-plus').addEventListener('click', function(){

   const newCaseNumber =  updateCaseNumber(true);
   updateAmount(newCaseNumber);
   calculateSubtotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
  
     const newCaseNumber = updateCaseNumber(false);
     updateAmount(newCaseNumber)
     calculateSubtotal();
})