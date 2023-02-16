const sliderStyling = () =>{
    const inputs = document.querySelectorAll('input');
    const horizontals = document.querySelectorAll('.noUi-horizontal');
    const handles = document.querySelectorAll('.noUi-handle');

    inputs.forEach((item, i) =>{
        item.addEventListener('click', function(){
            if(item !== i){
            horizontals[i].classList.add('noUi-horizontal--focus');
            handles[i].classList.add('noUi-handle--focus');
            }
        });
        item.addEventListener('mouseout', function(){
            if(item !== i){
                horizontals.forEach(horizontal => {
                    horizontal.classList.remove('noUi-horizontal--focus');
                });
                horizontals[i].classList.remove('noUi-horizontal--focus');
                handles.forEach(handle =>{
                    handle.classList.remove('noUi-handle--focus');
                });
                handles[i].classList.remove('noUi-handle--focus');
                }
        });
    });
};

export default sliderStyling;