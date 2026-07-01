function mensaje() {
    var time = document.getElementById("time");
    var minutos = parseInt(time.value) || 0;
    alert("Minutos de llamadas: " + minutos);

    var plan = document.querySelector('input[name="plan"]:checked');
    var costoPlan = 0;
    if (plan) {
        costoPlan = parseInt(plan.value);
        alert("Tipo de plan elegido: " + plan.value);
    } else {
        alert("No seleccionaste ningún plan");
    }

    var serviciosSeleccionados = [];
    var totalServicios = 0;
    var servicios = document.querySelectorAll('input[type="checkbox"]:checked');
    servicios.forEach(function(serv) {
        serviciosSeleccionados.push(serv.nextSibling.textContent.trim());
        totalServicios += parseInt(serv.value);
    });
    alert("Otros servicios: " + (serviciosSeleccionados.length > 0 ? serviciosSeleccionados.join(", ") : "Ninguno"));

    var paquete = document.querySelector("select").value;
    alert("Paquete escogido: " + paquete);

    var total = costoPlan + totalServicios;
    alert("Total a pagar: " + total);

    var salida = document.querySelector("input[type='text']");
    salida.value = total;
}

var boton = document.getElementById("btncalcular");
boton.addEventListener("click", mensaje);






var boton = document.getElementById("btncalcular");
boton.addEventListener("click", mensaje);