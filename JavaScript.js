function pause_icon() {
    let icon = document.getElementById("pause_icon");

     if (icon.firstChild) {
        icon.removeChild(icon.firstChild);
    }

    let img = document.createElement("img");
    
    if (screen.width > 500) {
        img.src = "pattern-divider-desktop.svg";
    } else if (screen.width <375) {
        img.src = "pattern-divider-mobile.svg";

    }else{
       console.log("There was an error!")
    }
    
    icon.appendChild(img);
}

let API_key = "CloX15kf0/vuecd5QXYYBQ==HJurYfpgRGW6JZIE";

const method_options = {
    method: 'GET',
    headers: {
        'X-Api-Key': API_key,
    },
}

let advice = document.getElementById("advice_body");
let title = document.getElementById("advice_title");
let increment = 1;

function fetchAdvice() {
    fetch("https://api.api-ninjas.com/v1/quotes", method_options)
    .then(response => response.json())
    .then(data => {
        if (data[0].quote.length < 100) {
            advice.innerHTML = `"${data[0].quote}"`;
            title.innerHTML = `A D V I C E # ${increment}`; 
            increment++;
            pause_icon();
        } else {
            console.log("La longitud es mayor que 100, buscando de nuevo...");
            fetchAdvice();  // Llamada recursiva para intentar obtener otra cita
        }
    })
    .catch(error => {
        console.error('Error al obtener la cita:', error);
    });
}

 setInterval(fetchAdvice, 2000); 
