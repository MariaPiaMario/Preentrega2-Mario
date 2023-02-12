

class Producto{

    constructor(nombre, precio){
            this.nombre = nombre;
            this.precio = precio;
            }
    }
    

const Productos = [
    new Producto("Sandalias", 17000),
    new Producto("Bolso Grande", 20000),
    new Producto("Bolso Mediano", 15000),
    new Producto("Bolso Pequeño", 12000),
    new Producto("Alfombra Grande", 22000),
    new Producto("Alfombra Pequeña", 10000),
    new Producto("Portacelular", 8000),
];

let carrito = [];
let costoDeEnvio = 0;

// Pedir nombre al usuario nombre y mail

const cliente = prompt("Ingrese su nombre");
const eMail = prompt("Ingrese su e-mail");

// Dar la bienvenida y mostrar los productos disponibles para comprar
let seleccion = prompt("Bienvenid@ " + cliente + " a nuestra tienda online. Desea realizar una compra?. Ingrese SI o NO."). toLowerCase();

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese SI o NO");
    seleccion = prompt("Bienvenid@ " + cliente + " a nuestra tienda online. Desea realizar una compra?. Ingrese SI o NO.");
}

if(seleccion == "si"){
    alert("Nuestros productos disponibles son los siguientes : ");

    let listaDeProductos = Productos.map((producto) => producto.nombre + " " + "$" + producto.precio);

    alert(listaDeProductos.join (" / "));

} else if(seleccion == "no"){
    alert("Gracias por visitar nuestra tienda online. Hasta pronto!");
}

while(seleccion != "no"){
    let producto = prompt("Agregá un producto a tu carrito"). toLowerCase();
    let precio = 0;

if(producto == "sandalias" || producto == "bolso grande" || producto == "bolso mediano" || producto == "bolso pequeño" || producto == "alfombra grande" || producto == "alfombra Ppequeña" || producto == "portacelular"){

    switch(producto){
        case "sandalias":
        precio = 17000;
        break;

        case "bolso grande":
        precio = 20000;
        break;

        case "bolso mediano":
            precio = 15000;
            break;

        case "bolso pequeño":
            precio = 12000;
            break;

        case "alfombra grande":
        precio = 22000;
        break;

        case "alfombra pequeña":
        precio = 10000;
        break;   
        
        case "portacelular":
        precio = 8000;
        break;          
    }

let unidades = parseInt(prompt("Ingrese las unidades que desea comprar"));

carrito.push({producto, unidades, precio});
console.log(carrito);

} else {
    alert("El producto ingresado no existe");
}
seleccion = prompt("Desea seguir comprando? Ingrese SI o NO.");

while(seleccion == "no"){
    let costoDeEnvio = 0;

    entrega = prompt("Ingrese el método de envío. Para retirar en persona por nuestro Showroom sin costo escriba SHOWROOM. Si el envío es dentro de CABA con costo de $500 escriba CABA, si el envío es hacia la Provincia de Buenos Aires con costo de $1200 escriba PROVINCIA."). toLowerCase();
    
    if (entrega == "showroom"){
        costoDeEnvio += 0;
        console.log(costoDeEnvio);
    }
    else if (entrega == "caba"){
        costoDeEnvio += 500;
        console.log(costoDeEnvio);
    }
    else if (entrega == "provincia"){
        costoDeEnvio += 1200;
        console.log(costoDeEnvio); 
    }
    else{
        alert("Forma de envío elegida incorrecta");
    }
    
    alert("GRACIAS POR TU COMPRA " + cliente + "! En minutos te llegará un e-mail a " + eMail + " con la factura de tu compra y los próximos pasos a seguir.");

carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`);
})
    break;
}

}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar por su compra es: ${total}`);

let precioConIva = ((total + costoDeEnvio) * 1.21)
    
alert("La suma del costo de los artículos dentro de su carrito + el costo de envío es: $" + total + costoDeEnvio + " + IVA. La suma total de su compra incluyendo el IVA es: $" + precioConIva);

console.log("Fin del programa");

















