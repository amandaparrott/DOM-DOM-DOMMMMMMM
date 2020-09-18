
//button//
window.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Add Square';
    div.appendChild(button);
    document.body.appendChild(div);

//add div when button is clicked, assign id number//
let squareId = 0;
button.addEventListener('click', function() {
    let div = document.createElement('div');
    let p = document.createElement('p');
    squareId+1;
    div.appendChild(p);
    p.className = 'p';
    p.innerText = squareId;
    p.style.color = "black";

    //show div id with mouseover//
    div.addEventListener ('mouseover', function() {
        p.style.color = "white";
    });
    div.id = 'square' + squareId++; 

    //reverse of above//
    div.className = 'square';
    document.body.appendChild(div);
    div.addEventListener ('mouseleave', function() {
        p.style.color = "black";
    });

    //random colors//
    let colors = [
        '#CCFF1A', 
        '#FF1A66', 
        '#E6331A', 
        '#33FFCC',
        '#66994D', 
        '#B366CC', 
        '#4D8000', 
        '#B33300'
    ];
    //function to call random colors//
    function randomColor() {
        let aRandomColor = colors[Math.floor(Math.random()*colors.length)];
        return aRandomColor;
    }

    //click square for random color
    div.addEventListener ('click', function() {
        let aRandomColor = randomColor();
        div.style.backgroundColor = aRandomColor; 
    });

});





        //END OF CONTAINER//
})


// for hover, maybe create paragraph, look up event listeners?
//does my paragaraph need to be defined outside of the div?
//
