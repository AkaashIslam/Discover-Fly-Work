       //  First Class Solution:
document.getElementById('plusButton').addEventListener("click", function(){
    totalCount(true);
})
document.getElementById('minusButton').addEventListener("click", function(){
    totalCount(false);
})  
function totalCount(isIncrease){
    const addInput = document.getElementById('inputFastClass');
    const ticketCount = parseInt(addInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
        addInput.value = ticketNewCount;
    }
    if(isIncrease == false && ticketCount > 0 ){
        ticketNewCount = ticketCount - 1;
        addInput.value = ticketNewCount;
    }
    subTotal();
    vat();
}

        // Economy Class Solution:
document.getElementById('plusButtonEconomy').addEventListener("click", function(){
    totalCountEco(true);
})


document.getElementById('minusButtonEconomy').addEventListener("click", function(){
    totalCountEco(false);
})
function totalCountEco(isIncrease){
    const addInput = document.getElementById('inputEcoClass');
    const ticketCount = parseInt(addInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
        addInput.value = ticketNewCount;
    }
    if(isIncrease == false && ticketCount > 0 ){
        ticketNewCount = ticketCount - 1;
        addInput.value = ticketNewCount;
    }
    subTotal();
    vat();
}

         // SubTotal Solution: 
function subTotal(){
    const  inpFc = document.getElementById('inputFastClass');
    const ticketF  = parseInt(inpFc.value);

    const  inpEc = document.getElementById('inputEcoClass');
    const ticketE  = parseInt(inpEc.value);

    const sub =  ticketF * 150 + ticketE *100;
    document.getElementById('subtotal').innerText = '$' + sub;

    const vat = sub * 0.1;
    document.getElementById('vat-amount').innerText = '$' + vat;
    
    const grandTotal = sub + vat;
    document.getElementById('grand-total').innerText = "$" + grandTotal;

}