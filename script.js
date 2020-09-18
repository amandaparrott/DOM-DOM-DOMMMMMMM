

window.addEventListener("DOMContentLoaded", function() {
    //button//
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Add Square';
    document.body.appendChild(button);
    document.body.appendChild(div);

    //create container for all divs//
    let container = document.createElement('div');
    container.className = "container";
    document.body.appendChild(container);
    

   

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
    div.id = squareId++; 

    //reverse of above//
    div.className = 'square';

    //place all divs in container//
    container.appendChild(div);
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

    //click square for random color//
    div.addEventListener ('click', function() {
        let aRandomColor = randomColor();
        div.style.backgroundColor = aRandomColor; 
    });
    //double click  with even/odd results//
    div.addEventListener ('dblclick', function() {
        console.log("text");
        console.log(div.id);
        if (div.id %2 === 0) {
            if (div.nextSibling) {
                container.removeChild(div.nextSibling);
            } else {
                alert('No Square To Delete');
            };
        } else {        
            if (div.previousSibling) {
                container.removeChild(div.previousSibling);
            } else {
                alert('No Square To Delete');
            };
        };
    });
});
      //END OF CONTAINER//
});