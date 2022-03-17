let display = document.getElementById('display');

let buttons = document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListner('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText;
        }
    });
});