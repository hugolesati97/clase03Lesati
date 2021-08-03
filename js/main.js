// for (let i = 1; i <= 5; i++){
//     if (i == 4) {
//         break
//     }

//     let = ingresaNombre = prompt("Ingrese nombre " + i);

//     alert("Turno N° " + i + "Nombre: " + ingresaNombre)
// }



let personaje = prompt("Ingresa un personaje");

 while(personaje != "parar"){
    switch (personaje) {
        case "hermione":
        alert("Hermione es un personaje de Harry Potter");
        break;
        case "Tony Stark":
        alert("Tony Stark es un personaje de los Vengadores");
        break;
        case "Toretto":
        alert("Toretto es un personaje de Rapidos y Furiosos")
        break;    
        case "Eren":
        alert("Eren Jaeger es un personaje de Attack on Titan")
        default:
        alert("Ingresa un personaje por favor")
        break;
    }        
   personaje = prompt("Ingrese un personaje") 
 }