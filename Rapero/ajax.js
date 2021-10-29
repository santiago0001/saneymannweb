console.log("activo")

document.querySelector('#boton').addEventListener('click',leertxt );

function leertxt (){
    const xhttp = new XMLHttpRequest();



    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var texto=this.responseText;


            var divisiones = texto.split("\n");
           var cantidadJuegos = divisiones.length;
            console.log(cantidadJuegos);

            for (var i = 0; i < cantidadJuegos; i++) {

              document.getElementById("resultado").innerHTML += divisiones [i] +"<br><br>";
            }




           }
         };




         xhttp.open("GET", "db_external.txt", true);
    xhttp.send();
    }
