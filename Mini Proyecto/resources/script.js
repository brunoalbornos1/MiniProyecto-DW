// Contador de visitas (ejemplo básico, usar una base de datos en producción)
let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);

// Envío del formulario (ejemplo básico, implementar validación y envío de datos)
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí implementarías el envío de los datos del formulario a un servidor
    alert('¡Gracias por suscribirte!');
});
// let colorNegro = '#0d0d0d';
// let colorBlanco = '#0d0d0d';

// // PARA CAMBIAR EL COLOR DEL FONDO DEPEDNIEDNO DEL NOMBRE DEL ARHIVO
// const rutaCompleta = window.location.pathname;
// const nombreArchivo = rutaCompleta.split("/").pop();  // Obtiene solo el nombre del archivo

// // Aplicar estilos al body dependiendo del nombre del archivo
// if (nombreArchivo === 'IA.html') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';  // Cambiar el color del texto para que sea visible en fondo negro
// } else if (nombreArchivo === 'otroarchivo.html') {
//     document.body.style.backgroundColor = 'blue';
// } else {
//     // Estilo por defecto si no coincide con ningún archivo específico
//     document.body.style.backgroundColor = 'white';
// }