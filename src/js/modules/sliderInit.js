import noUiSlider from 'nouislider';


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
            to: function (value) {
                return Number(Math.round(value));
                
            },
            from: function (value) {
                return value;
            }
        },

        
    });

    sliderItem.noUiSlider.on('update', function (values, handle) {
            valueItem.value = values[handle];

    });

    valueItem.addEventListener('change', function(){
        this.value = this.value;
        sliderItem.noUiSlider.set([+this.value]);

    });

};

export default sliderInit;