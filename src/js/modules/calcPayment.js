const calcPayment = (priceItem, paymentItem, leasingItem) =>{
    let result = Number(Math.round((priceItem.value - paymentItem.value) * (0.05 * Math.pow((1 + 0.05), leasingItem.value) / (Math.pow((1 + 0.05), leasingItem.value) - 1)))).toLocaleString();
    return result;
};

 export default calcPayment;