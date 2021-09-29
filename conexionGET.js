let pedidos
let URL = "http://localhost:8080/facturas"
let parametros = {
    method: "GET"
}
fetch(URL, parametros)
    .then(respuesta => respuesta.json())
    .then (function(respuesta){
        pedidos=respuesta.datos
        console.log(pedidos)
       
        let contenedorPadre=document.getElementById("padre");
        pedidos.forEach(function(pedido){
            let columna=document.createElement("div");
            columna.classList.add("col");
        
            let tarjeta=document.createElement("div");
            tarjeta.classList.add("card");
            tarjeta.classList.add("h-100");
        
            let imagen=document.createElement("img");
            imagen.classList.add("card-img-top");
            imagen.classList.add("img-fluid");
            imagen.src=pedido.foto;
        
            let cuerpo=document.createElement("div");
            cuerpo.classList.add("card-boby");
        
            let titulo=document.createElement("h5");
           titulo.classList.add("card-title");
           titulo.textContent=`producto:${pedido.producto}`;
        
           let texto=document.createElement("p");
           texto.classList.add("card-title");
           texto.textContent=`precio:${pedido.precio}`;
        
           let texto2=document.createElement("p");
           texto2.classList.add("card-title");
           texto2.textContent=`peso:${pedido.peso}`;
        
           let texto3=document.createElement("p");
           texto3.classList.add("card-title");
           texto3.textContent=`cantidad:${pedido.cantidad}`;
        
        
           let boton=document.createElement("button");
           boton.classList.add("btn");
           boton.classList.add("btn-outline-success");
           boton.classList.add("btn-dark");
           boton.classList.add("w-100");
        
            let boton2=document.createElement("button");
            boton2.classList.add("btn");       
            boton2.classList.add("btn-dark");
            boton2.classList.add("btn-outline-danger");
            boton2.classList.add("w-100");
            boton2.classList.add("mt-3");
        
            let icono=document.createElement("i");
            icono.classList.add("fa-pencil-alt");
            icono.classList.add("fas"); 
        
            let icono2=document.createElement("i");
            icono2.classList.add("fa-trash-alt");
            icono2.classList.add("fas"); 
        
        
            boton.appendChild(icono)
            boton2.appendChild(icono2)
            cuerpo.appendChild(titulo)
            cuerpo.appendChild(texto)
            cuerpo.appendChild(texto2)
            cuerpo.appendChild(texto3)
            cuerpo.appendChild(boton)
            cuerpo.appendChild(boton2)
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(cuerpo)
            columna.appendChild(tarjeta)
            contenedorPadre.appendChild(columna)
        });
    })
    .catch(error => console.log(error))
