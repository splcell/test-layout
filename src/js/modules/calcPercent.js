const calcPercent = (paymentItem, priceItem) =>{
    let result = Math.round((paymentItem.value / priceItem.value) * 100);
    return Number(result);
};

export default calcPercent;