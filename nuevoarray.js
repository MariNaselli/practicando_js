var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Cel", costo: 2000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Libro", costo: 10000},
    {nombre: "Audifonos", costo: 8000}
    
    
];

var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo <=500
});

var nombreArticulos = articulos.map(function(articulo){
return articulo.nombre
})

//

var encuentraArticulos = articulos.find(function(articulo){
return articulo.nombre === "TV"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

