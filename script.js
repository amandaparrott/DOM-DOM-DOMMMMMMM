
//button//
window.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Add Square';
    div.appendChild(button);
    document.body.appendChild(div);

//add div when button is clicked, assign id number//
button.addEventListener('click', function() {
    let div = document.createElement('div');
    squareId+1;
    div.innerText = squareId;
    div.id = 'square' + squareId++; 
    div.className = 'square';
    document.body.appendChild(div);
});

let squareId = 0;


        //END OF CONTAINER//
})


// for hover, maybe create paragraph, look up event listeners?
