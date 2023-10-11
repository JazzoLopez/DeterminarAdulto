function limpiarPantalla() {
  document.getElementById("dia").value = "";
  document.getElementById("mes").value = "";
  document.getElementById("año").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function ver() {
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var año = document.getElementById("año").value;

  if (dia === "" || mes === "" || año === "") {
    alert("Por favor ingresa todos los datos tilin.");
    // document.getElementById("imagen").src = "/assets/advertencia.png";
    limpiarPantalla();
    return;
  }

  dia = parseInt(dia);
  mes = parseInt(mes);
  año = parseInt(año);

  var fechaHoy = new Date();
  var edad = fechaHoy.getFullYear() - año;

  if (
    fechaHoy.getMonth() + 1 < mes ||
    (fechaHoy.getMonth() + 1 === mes && fechaHoy.getDate() < dia)
  ) {
    edad--;
  }

  if ( mes > 12 ||mes < 1 ||dia > 31 ||dia < 1 ||isNaN(edad) ||año < 1900 ||año > 2023) 
  {
    alert("Por favor ingresa una fecha valida tilin.");
    // document.getElementById("imagen").src = "/assets/advertencia.png";
    limpiarPantalla();
    return;
  }
  if (edad >= 18) {
    document.getElementById("imagen").src = "/assets/aprobar.png";
    document.getElementById("resultado").innerHTML =
      "Mayor de edad." + " <br>" + edad;
  } else {
    document.getElementById("imagen").src = "/assets/cancelar.png";
    document.getElementById("resultado").innerHTML =
      "Menor de edad." + "<br>" + edad;
  }
}
