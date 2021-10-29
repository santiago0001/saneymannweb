if (screen.width > 500) {
    var Wsp = document.getElementById('logowsp');
    Wsp.className = "float2";
}


var checkbox = document.getElementById('ckbox');
checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox() {
    var checked = checkbox.checked;
    if (checked) {
        var Wsp = document.getElementById('logowsp');
        Wsp.className = "float3";

        if (screen.width < 367) {
            window.sntchChat.Init(0)

        }

    } else {
        if (screen.width > 500) {


            var Wsp = document.getElementById('logowsp');
            Wsp.className = "float2";
            window.sntchChat.Init(184502)

        }
    }
}

function WspRedirect() {

    if (screen.width > 500) {
        window.open("https://web.whatsapp.com/send/?phone=541126585024.&text=Necesito un presupuesto! &app_absent=0", "_blank");

    } else {
        window.location = "https://api.whatsapp.com/send/?phone=541126585024.&text=Necesito un presupuesto! &app_absent=0";
    }

}


function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}


function Facebook() {
    window.open("https://www.facebook.com/rockryl", "_blank");
}


var nombre = document.getElementById("name");
var mail = document.getElementById("mail");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var error = document.getElementById("error");
error.style.color = "red"

function enviarFormulario() {

    var mensajeError = [];

    if (nombre.value === null || nombre.value === "") {
        mensajeError.push("* Ingrese tu nombre");
    }
    if (mail.value === null || mail.value === "") {
        mensajeError.push("* Ingrese tu email");
    }
    if (phone.value === null || phone.value === "") {
        mensajeError.push("* Ingrese tu Telefono");
    } else {
        return true;
    }



    error.innerHTML = mensajeError.join("<br>");
    return false;

}