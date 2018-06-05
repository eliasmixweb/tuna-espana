// Comprueba modo escritorio o movil
var jsmodo = "";
  function movil(jsmodo) {
    jsmodo = "movil.css";
    // Create an object:
    document.getElementById("modo").rel = "stylesheet";
    document.getElementById("modo").href = jsmodo;
    document.getElementById("modo2").rel = "stylesheet";
    document.getElementById("modo2").href = jsmodo;
    return jsmodo;
  }

  function escritorio(jsmodo) {
    jsmodo = "escritorio.css";
    document.getElementById("modo").rel = "stylesheet";
    document.getElementById("modo").href = jsmodo;
    document.getElementById("modo2").rel = "stylesheet";
    document.getElementById("modo2").href = jsmodo;
    return jsmodo;
  }
  if (jsmodo == "") {

  } else {
    document.getElementById("modo").rel = "stylesheet";
    document.getElementById("modo").href = jsmodo;
    document.getElementById("modo2").rel = "stylesheet";
    document.getElementById("modo2").href = jsmodo;
  }

function subnavClick(n) {
  var a = "celdanav" + n;
  var b = "subnav" + n;
  nav_verde();
  subnav_ocultar();
  var x = document.getElementById(a);
  x.style.background = "white";
  x.style.color = "rgb(0,100,0)";
  document.getElementById(b).style.display = "block";
}

function subnavEnter(n) {
  var a = "celdanav" + n;
  var b = "subnav" + n;
  nav_verde();
  subnav_ocultar();
  var x = document.getElementById(a);
  x.style.background = "white";
  x.style.color = "rgb(0,100,0)";
}

function nav_verde() {
  var x = document.getElementById("celdanav0");
  x.style.background = "rgb(0,100,0)";
  x.style.color = "white";
  var x = document.getElementById("celdanav1");
  x.style.background = "rgb(0,100,0)";
  x.style.color = "white";
  var x = document.getElementById("celdanav2");
  x.style.background = "rgb(0,100,0)";
  x.style.color = "white";
  var x = document.getElementById("celdanav3");
  x.style.background = "rgb(0,100,0)";
  x.style.color = "white";
  var x = document.getElementById("celdanav4");
  x.style.background = "rgb(0,100,0)";
  x.style.color = "white";
}

function subnav_ocultar() {
  document.getElementById("subnav1").style.display = "none";
  document.getElementById("subnav2").style.display = "none";
  document.getElementById("subnav3").style.display = "none";
  document.getElementById("subnav4").style.display = "none";
  nav_verde();
}
// Inserta portada
function portada() {
  var a = document.getElementById("portada").innerHTML =
    '<a href="Media/Cabeceras/Portada1272x256.png?raw=true"><img class="bloq100" src="Media/Cabeceras/Portada1272x256.png?raw=true" /></a>';

}
// Inserta aside
function aside() {
  var a = document.getElementById("aside").innerHTML =
    '<aside id="aside" style="text-align:center;">OTRAS NOTICIAS<hr style="border-color:gray;"></aside>'
  var para = document.createElement("object");
  para.data = "html/noticias.html";
  para.width = "100%";
  para.height = "100%"
  var element = document.getElementById("aside");
  element.appendChild(para);
}

function footer() {
  var a = document.getElementById("footer").innerHTML = '<p>&copy; 2018 Tuna España &#8211; Universitaria <a href="http://www.tunaespana.es/wp-login.php">Acceder</a></p>';
}

function nav1() {
  var a = document.getElementById("nav1").innerHTML = '<nav id="nav1"><span id="celdanav0"  onmouseenter="subnavEnter(0)"><a style="text-decoration:none;" href="index.html"><img style="width:25px;height:25px;text-align:center"  src="Media/casa.png">&nbsp</a></span>'+'<span id="celdanav1" onclick="subnavClick(1)" onmouseenter="subnavEnter(1)">TunaEspaña&nbsp;<sub>&#9662;</sub></span>    <div id="subnav1" class="subnav1"><a class="celdasubnav" href="tunaespana.html">Descripción</a><a class="celdasubnav" href="componentes.html">Componentes</a><a class="celdasubnav" href="marcaespana.html">Marca España</a><a class="celdasubnav" href="">Sello de Correos</a></div>'+' <span id="celdanav2" onclick="subnavClick(2)" onmouseenter="subnavEnter(2)">Eventos&nbsp;<sub>&#9662;</sub></span><div id="subnav2" class="subnav2"><a class="celdasubnav" href="">Juntamentos</a><a class="celdasubnav" href="">Actuaciones</a><a class="celdasubnav" href="">Insignias de oro Rectores</a><a class="celdasubnav" href="">Insignias de oro Caballero Español</a><a  class="celdasubnav" href="">Rondas a Patronas</a><a  class="celdasubnav" href="">Madrinas</a><a class="celdasubnav"  href="">Rondas Cruces de Mayo</a><a class="celdasubnav" href="">Rondas a sus Mayores</a>      <a class="celdasubnav" href="">Conciertos Benéficos</a>      <a class="celdasubnav" href="">Rondas a Centros Penitenciarios</a></div>' + '<span id="celdanav3" onclick="subnavClick(3)" onmouseenter="subnavEnter(3)" >Archivo&nbsp;<sub>&#9662;</sub></span><div id="subnav3" class="subnav3"><a class="celdasubnav" href="">item2-1 </a> <a class="celdasubnav" href="">item2-2 </a>    </div>'+'<span id="celdanav4" onclick="subnavClick(4)" onmouseenter="subnavEnter(4)">Otros&nbsp;<sub>&#9662;</sub></span>  <div id="subnav4" class="subnav4"><a class="celdasubnav" href="#body"  onclick="movil()">Navegación en modo móvil  </a> <a class="celdasubnav" href="#body"  onClick="escritorio()">Navegación en modo escritorio </a>    </div>'+'';
}
