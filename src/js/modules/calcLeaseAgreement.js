const calcLeaseAgreement = (paymentItem, leasingItem, priceItem) =>{
    let result = Number(paymentItem.value + leasingItem.value * (priceItem.value - paymentItem.value) * (0.05 * Math.pow((1 + 0.05), leasingItem.value) / (Math.pow((1 + 0.05), leasingItem.value) - 1)).toFixed()).toLocaleString();
    return result;
};
export default calcLeaseAgreement;