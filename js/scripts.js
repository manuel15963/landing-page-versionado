

function insertar_imagen(confiteria_nombre,extension_comun,id,inicio,final){

    var array_divs=new Array(0);
    
    var contenedor_elementos=document.querySelector(id);
    var div_imagenes=document.createElement('div');
    var elemento_imagen=document.createElement("img");
    
    var nombre_completo=String;
    
    
    for(let i=inicio;i<final;i++){
        var elemento_imagen2=elemento_imagen.cloneNode(true);
        var div_temporal=div_imagenes.cloneNode(true);
        var contador=i+1
    
        nombre_completo=confiteria_nombre+String(contador)+extension_comun;
        elemento_imagen2.setAttribute('class','confiteria-imagenes');
        elemento_imagen2.setAttribute("src",nombre_completo);
    
        div_temporal.appendChild(elemento_imagen2)
        array_divs.push(div_temporal);
    
    }
    
    
    array_divs.forEach(function(elemento,indice,array){
        contenedor_elementos.appendChild(elemento);
    })
}

insertar_imagen("imagenes/confiteria/",".jfif",'#confiterias',0,5);
insertar_imagen("imagenes/confiteria/",".jfif",'#tabla-confiteria2',5,10);

insertar_imagen("imagenes/limpieza/",".jpg",'#tabla-limpieza',0,5);
insertar_imagen("imagenes/limpieza/",".jpg",'#tabla-limpieza2',5,8);

insertar_imagen("imagenes/vegetales/", ".jpg", "#tabla_vegetal",0,5);
insertar_imagen("imagenes/vegetales/", ".jpg", "#tabla_vegetal2",5,10);

insertar_imagen("imagenes/carne/", ".jpg", "#tabla-carne",0,5);
insertar_imagen("imagenes/carne/", ".jpg", "#tabla-carne2",5,10);
