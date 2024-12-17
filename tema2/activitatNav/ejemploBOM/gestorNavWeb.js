function mostrarURLActual(){
    let urlActual = window.location .href;
    alert("La url actual es:\n "+urlActual)
}

function irAtras() {
    if (window.history.length > 1) {
        history.back(); 
    } else {
        confirm("No hay historial anterior.");
    }
}

function irAdelante() {
    if (window.history.length > 1) {
        history.forward();
    } else {
        confirm("No hay historial siguiente.");
    }
}


function mostrarInfoNavegador() {
    let infoNav = "Agente de usuario (user agent): " + navigator.userAgent + "\n" +
                  "Idioma: " + navigator.language + "\n" +
                  "En linea: " + navigator.onLine + "\n" +
                  "Plataforma: " + navigator.platform + "\n" +
                  "Cookies habilitadas: " + navigator.cookieEnabled;

    alert("Información del navegador:\n" + infoNav);
}

function redirigirURL() {
    let urlInput = document.getElementById("urlInput").value;  // Obtener el valor del input
    if (urlInput) {
        window.location.assign(urlInput);  // Redirigir a la URL ingresada
    } else {
        alert("Por favor, introduce una URL válida.");
    }
}

let popup; // Variable global para almacenar la referencia de la ventana emergente

        // Abre la ventana emergente
        function abrirPopup() {
            popup = window.open("https://paucasesnovescifp.cat/", "_blank", "width=800,height=600");
        }

        // Cierra la ventana emergente si está abierta
        function cerrarPopup() {
            if (popup && !popup.closed) {
                popup.close(); // Cerrar la ventana emergente si está abierta
            } else {
                alert("La ventana emergente no está abierta o ya ha sido cerrada.");
            }
        }