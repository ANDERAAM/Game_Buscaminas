
var Nivel;var Nombre;var Cont=0;

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
 var fila  = document.createElement("tr");
 for (var j = 0; j < 4; j++){
 var celda =  document.createElement("td");
 var Img   =  document.createElement("img");
 Img.src="Bloque.png"; c=c+1;
 Img.setAttribute("id","ID"+c);
 celda.appendChild(Img);
 fila.appendChild(celda);
 }
 tblBody.appendChild(fila);
 }
 tabla.appendChild(tblBody);
 TableroCompleto.appendChild(tabla);
 tabla.setAttribute('Class','Tabla');
 tabla.setAttribute('border','10');

  Cont = Cont + 1 ;
  document.getElementById("ID0").onclick = function() {
  document.getElementById("ID0").innerHTML = alert("YOU CLICKED ME! : " + "ID0");

}

/*function ClickImg(){
  Cont = Cont + 1 ;
  document.getElementById("ID"+Cont).onclick = function() {
    document.getElementById("ID"+Cont).innerHTML = alert("YOU CLICKED ME! : "+"ID"+Cont);
  };
}
*/



//ClickImg();
