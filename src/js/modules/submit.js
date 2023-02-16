const submit = (formItem, btn, priceItem, paymentItem, leasingItem, priceForm, paymentForm) => {
    formItem.addEventListener('submit', function(e){
        e.preventDefault();
        const objResult = {
                price: priceItem.value,
                payment: paymentItem.value,
                leasing: leasingItem.value,
                priceResult: priceForm,
                paymentResult: paymentForm
            };

            alert(JSON.stringify(objResult));
            btn.classList.add('btn--disabled');
            btn.disabled = true;
   
});

};

export default submit;