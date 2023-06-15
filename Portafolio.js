let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
window.onscroll = function() { efectoHabilidades() };

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 250) {
    document.getElementById("javascript").classList.add("barra-progreso");
    document.getElementById("html").classList.add("barra-progreso");
    document.getElementById("css").classList.add("barra-progreso");
    document.getElementById("linux").classList.add("barra-progreso");

  }
  if (distancia_skills >= 250) {
    document.getElementById("creatividad").classList.add("barra-progreso1");
    document.getElementById("equipo").classList.add("barra-progreso1");
    document.getElementById("planificacion").classList.add("barra-progreso1");
    document.getElementById("dedicacion").classList.add("barra-progreso1");
  }
}
