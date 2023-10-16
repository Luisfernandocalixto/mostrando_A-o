function mostrarFecha() {
    let date = new Date();
    let anio = date.getFullYear();

    let tiempo = anio;

    let mostrar = document.querySelector("#fecha");
    mostrar.textContent = tiempo;

}

setInterval(mostrarFecha,1000);