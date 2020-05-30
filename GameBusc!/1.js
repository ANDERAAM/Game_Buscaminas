
var Nivel;var Nombre;

function Inicio(){
  Nivel  = document.getElementById("NivelJuego").value;
  Nombre = document.getElementById("N_Usuario").value;
  alert("Nivel");
  if(Nivel=="Facil")TableroF()
  if(Nivel=="Medio")TableroM()
  if(Nivel=="Dificil")TableroF()
}

function TableroF(){
  alert("Entro a facil");
document.getElementById("CTOTAL").style.display="none";
var c=0;
var body = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
for (var i = 0; i < 4; i++){
var fila = document.createElement("tr");
for (var j = 0; j < 4;j++){
var celda = document.createElement("td");
var Blo   = document.createElement("img");
Blo.src="Bloque.png";
celda.appendChild(Blo);c++;
//alert("Hola_Mundo");
celda.setAttribute("id","Blo");
//alert("Hola_Mundo");
fila.appendChild(celda);
}
tblBody.appendChild(fila);
}
/*tabla.appendChild(tblBody);
TableroCompleto.appendChild(tabla);
tabla.setAttribute('class','Tabla');
tabla.setAttribute('border','1');
*/
}
