import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const sliderInit = (sliderItem, valueItem, start, min, max) => {

    let priceStart = start;

    noUiSlider.create(sliderItem, {
        start: [priceStart],
        range: {
            'min': [min],
            'max': [max]
        },

        connect: true,

        format: {
            // 'to' the formatted value. Receives a number.
            to: function (value) {
                return Number(Math.round(value));
                
            },
            // 'from' the formatted value.
            // Receives a string, should return a number.
            from: function (value) {
                return value;
            }
        },

        // format: wNumb({
        //     decimals: 0,
        //     thousand: ' ',
        // })

        
    });

    sliderItem.noUiSlider.on('update', function (values, handle) {
            valueItem.value = values[handle];
            //valueItem.setAttribute('data-value', values[handle]);

    });

    valueItem.addEventListener('change', function(){
        this.value = this.value;
        sliderItem.noUiSlider.set([+this.value]);

    });

};

export default sliderInit;