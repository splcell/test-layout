import noUiSlider from 'nouislider';

const sliderInit = (sliderItem, valueItem, start, min, max) => {

    let priceStart = start;

    console.log(start.toLocaleString());
    


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
                return Math.round(value).toLocaleString();
            },
            // 'from' the formatted value.
            // Receives a string, should return a number.
            from: function (value) {
                return Number(value);
            }
        },

        ariaFormat: valueItem.value
        
    });

    sliderItem.noUiSlider.on('update', function (values, handle) {
        valueItem.value = values[handle];
    });

};

export default sliderInit;