const buttonList = document.querySelectorAll('.item_button');

buttonList.forEach(buttonRef => {
    buttonRef.addEventListener('click', toggleElement)
});


function toggleElement() {
    let x = document.getElementById('myDiv');
    if (x.style.display === 'none'){
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
    }
}

