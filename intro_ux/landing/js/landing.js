$(document).ready(function(){

   // Escala y Recorta la imagen para que quepa exacto en su contenedor
   $('.imgLiquidFill').imgLiquid()

//Configuramos nuestro plugin a partir de un objeto de JS
   $('.imgLiquidNoFill').imgLiquid({
       fill: false
   })

   console.log('Landing Lista')

})

//Centrado vertical:
//Iterar por cada elemento que tenga la clase 'v-center'

$('.v-center').each(function(){

  elementoPadre= $(this)

  elementosHijos= elementoPadre.children()

  alturaHijos= 0

  //ahora, iterar por cada uno de estos elementos hijos:
  elementosHijos.each(function(){

    elementoHijo=$(this)

    alturaHijos += elementoHijo.height()
})

diferencia= elementoPadre.height() - alturaHijos
//dividir direfencia entre 2
espacioSuperior= diferencia / 2

//dar espaciado superior al padre, para que empuje sus hijos hacia abajo
elementoPadre.css({
  paddingTop: espacioSuperior
})

})
