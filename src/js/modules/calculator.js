import sliderInit from "./sliderInit";

const calculator = () =>{
   const priceSlider = document.getElementById('priceSlider');
   const price = document.getElementById('price');
   const paymentSlider = document.getElementById('paymentSlider');
   const payment = document.getElementById('payment');
   const leasingSlider = document.getElementById('leasingSlider');
   const leasing = document.getElementById('leasing');


price.addEventListener('change', function(){
    this.dataset.start = this.value;
});



//настройка ползунков

sliderInit(priceSlider, price, price.dataset.start, 1500000, 10000000 );
sliderInit(paymentSlider, payment, 420000, 150000, 6000000 );
sliderInit(leasingSlider, leasing, leasing.dataset.start, 6, 120 );





};

export default calculator;