function openPage(pageName, elmnt, color) {
    var i, contenido_solapa, solapa;
    contenido_solapa = document.getElementsByClassName("contenido_solapa");
    for (i = 0; i < contenido_solapa.length; i++) {
      contenido_solapa[i].style.display = "none";
    }

    solapa = document.getElementsByClassName("solapa");
    for (i = 0; i < solapa.length; i++) {
      solapa[i].style.backgroundColor = "";
    }
  
    document.getElementById(pageName).style.display = "block";
  
  
    elmnt.style.backgroundColor = color;
  }

  document.getElementById("Mostrar_primero").click();

function Mostrar_menu() {
    var estado_de_la_barra = document.getElementById("mi_barra");
    var estado_del_menu = document.getElementById("boton_menu")
    if (estado_de_la_barra.className === "barra_de_navegacion") {
      estado_de_la_barra.className += " responsiva";
      estado_del_menu.textContent = "Ocultar Menu";
    } else {
      estado_de_la_barra.className = "barra_de_navegacion";
      estado_del_menu.textContent = "Menu"
    }
    
  }