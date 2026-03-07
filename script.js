const container = document.getElementById("apps-container");

function mostrarApps(lista){

container.innerHTML="";

lista.forEach(app=>{

container.innerHTML+=`

<div class="card">

<img src="${app.imagen}">

<h3>${app.nombre}</h3>

<p>${app.descripcion}</p>

<small>${app.categoria}</small>

<a class="btn" href="${app.descarga}" target="_blank">Descargar</a>

<a class="btn btn2" href="${app.playstore}" target="_blank">Play Store</a>

</div>

`;

});

}

mostrarApps(apps);

document.getElementById("search").addEventListener("input",function(){

let valor=this.value.toLowerCase();

let filtrado=apps.filter(app=>app.nombre.toLowerCase().includes(valor));

mostrarApps(filtrado);

});

function filtrar(cat){

if(cat==="TODOS"){
mostrarApps(apps);
return;
}

let filtrado=apps.filter(app=>app.categoria===cat);

mostrarApps(filtrado);

}
