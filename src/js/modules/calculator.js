import sliderInit from "./sliderInit";
import noUiSlider from 'nouislider';
import submit from './submit';
import calcPercent from "./calcPercent";
import calcLeaseAgreement from "./calcLeaseAgreement";
import calcPayment from "./calcPayment";


const calculator = () =>{
   const priceSlider = document.getElementById('priceSlider');
   const price = document.getElementById('price');
   const paymentSlider = document.getElementById('paymentSlider');
   const payment = document.getElementById('payment');
   const leasingSlider = document.getElementById('leasingSlider');
   const leasing = document.getElementById('leasing');
   const form = document.querySelector('.calculator__form');
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
   percent.textContent = `${calcPercent(payment, price)} %`;
   formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
   formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
   //вывод расчетов после изменения положения ползунков
   paymentSlider.noUiSlider.on('update', function(values, handle){
      payment.value = values[handle];
      percent.textContent = `${calcPercent(payment, price)} %`;
      formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
      formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
   });
   priceSlider.noUiSlider.on('update', function(values, handle){
      price.value = values[handle];
      percent.textContent = `${calcPercent(payment, price)} %`;
      formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
      formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
   });

   leasingSlider.noUiSlider.on('update', function(values, handle){
      leasing.value = values[handle];
      formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
      formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
   });

// сбор данных при изменении положения ползунков

   leasingSlider.noUiSlider.on('end', function(values, handle){
      leasing.value = values[handle];
      formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
      formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
      let sumResult = calcLeaseAgreement(payment, leasing, price);
      let paymentResult = calcPayment(price, payment, leasing);
      let percent = calcPercent(payment, price);
      submit(form, formBtn, price, payment, leasing, sumResult, paymentResult, percent);
   });
};

formSum.setAttribute('data-value', '');


price.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   percent.textContent = `${calcPercent(payment, price)} %`;
   formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
   formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
});

payment.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   percent.textContent = `${calcPercent(payment, price)} %`;
   formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
   formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
});

leasing.addEventListener('input', function(){
   this.value = this.value.replace(/\D/g,'');
   formPayment.textContent = `${calcPayment(price, payment, leasing)} ₽`;
   formSum.textContent = `${calcLeaseAgreement(payment, leasing, price)} ₽`;
});
//сбор данных при изменении инпутов с клавиатуры
leasing.addEventListener('change', function(){
   let sumResult = calcLeaseAgreement(payment, leasing, price);
   let paymentResult = calcPayment(price, payment, leasing);
   let percent = calcPercent(payment, price);
   submit(form, formBtn, price, payment, leasing, sumResult, paymentResult, percent);
});








};

export default calculator;