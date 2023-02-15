import sliderInit from "./sliderInit";
import noUiSlider from 'nouislider';
import submit from './submit';


const calculator = () =>{
   const priceSlider = document.getElementById('priceSlider');
   const price = document.getElementById('price');
   const paymentSlider = document.getElementById('paymentSlider');
   const payment = document.getElementById('payment');
   const leasingSlider = document.getElementById('leasingSlider');
   const leasing = document.getElementById('leasing');
   const form = document.querySelector('.calculator__form');
   const inputs = form.querySelectorAll('input');
   const percent = document.querySelector('.calculator__form-percent');
   const formSum = document.querySelector('.calculator__form-sum');
   const formPayment = document.querySelector('.calculator__form-payment');
   const formBtn = document.querySelector('.calculator__form-btn');

   




//настройка ползунков
   sliderInit(priceSlider, price, +price.dataset.start, +price.dataset.min, +price.dataset.max );
   sliderInit(paymentSlider, payment, +payment.dataset.start, +payment.dataset.min, +payment.dataset.max );
   sliderInit(leasingSlider, leasing, +leasing.dataset.start, +leasing.dataset.min, +leasing.dataset.max );



//логикак калькулятора

window.onload = function(){
   //вывод расчетов после загрузки страницы и скриптов
   percent.innerHTML = `${Math.round((payment.value / price.value) * 100)} %`;
   formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
   formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)).toFixed()).toLocaleString()}`;
   //вывод расчетов после изменения положения ползунков
   paymentSlider.noUiSlider.on('update', function(values, handle){
      payment.value = values[handle];
      percent.innerHTML = `${Math.round((payment.value / price.value) * 100)} %`;
      formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
      formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)).toFixed()).toLocaleString()}`;
   });
   priceSlider.noUiSlider.on('update', function(values, handle){
      price.value = values[handle];
      percent.innerHTML = `${Math.round((payment.value / price.value) * 100)} %`;
      formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
      formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1))).toLocaleString()}`;
   });

   leasingSlider.noUiSlider.on('update', function(values, handle){
      leasing.value = values[handle];
      formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
      formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1))).toLocaleString()}`;
   });
};


price.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   percent.innerHTML = `${Math.round((payment.value / price.value) * 100)} %`;
   formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
   formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1))).toLocaleString()}`;
});

payment.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   percent.innerHTML = `${Math.round((payment.value / price.value) * 100)} %`;
   formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
   formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)).toFixed()).toLocaleString()}`;
});

leasing.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   formPayment.innerHTML = `${Number(Math.round((price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)))).toLocaleString()} ₽`;
   formSum.innerHTML = `${Number(payment.value + leasing.value * (price.value - payment.value) * (0.05 * Math.pow((1 + 0.05), leasing.value) / (Math.pow((1 + 0.05), leasing.value) - 1)).toFixed()).toLocaleString()}`;
});

submit(form, formBtn, price, payment, leasing, formSum, formPayment);







};

export default calculator;