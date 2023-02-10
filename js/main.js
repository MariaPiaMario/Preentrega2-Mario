
let sumaDeArticulos = 0;
const sandalias = 17000;
const bolsoGrande = 20000;
const bolsoMediano = 15000;
const bolsoPequenio = 12000;
const alfombraGrande = 22000;
const alfombraPequenia = 10000;
const portacelular = 8000;
let compraEnProceso = true;
let articulos;

const cliente = prompt("Ingrese su nombre");
const eMail = prompt("Ingrese su e-mail");

while(compraEnProceso){
    articulos = prompt("Ingrese un artículo que desee sumar a su carrito. Los precios son los siguientes: Sandalias $17000, Bolso Grande $20000, Bolso Mediano $15000, Bolso Pequeño $12000, Alfombra Grande $22000, Alfombra Pequeña $10000, Portacelular $8000. Cuando haya finalizado su compra escriba Salir"). toLowerCase();

class Producto{
    constructor(tipo, precio){
    this.tipo = tipo;
    this.precio = precio;
    }
}

const productos = [{
    
    const producto1 = new Producto("sandalias", 17000),
    const producto2 = new Producto("Bolso Grande", 20000),
    const producto3 = new Producto ("Bolso Mediano", 15000),
    const producto4 = new Producto("Bolso Pequeño", 12000),
    const producto5 = new Producto("Alfombra Grande", 22000),
    const producto6 = new Producto("Alfombra Pequeña", 10000),
    const producto7 = new Producto("Portacelular", 8000)
    }
];


switch(articulos){
        case "sandalias":
            sumaDeArticulos += sandalias;
            console.log(sumaDeArticulos);
            break;

        case "bolso grande":
            sumaDeArticulos += bolsoGrande;
            console.log(sumaDeArticulos);
            break; 

        case "bolso mediano":
            sumaDeArticulos += bolsoMediano;
            console.log(sumaDeArticulos);
            break;

        case "bolso pequeño":
            sumaDeArticulos += bolsoPequenio;
            console.log(sumaDeArticulos);
            break; 

        case "alfombra grande":
            sumaDeArticulos += alfombraGrande;
            console.log(sumaDeArticulos);
            break;     

        case "alfombra pequeña":
            sumaDeArticulos += alfombraPequenia;
            console.log(sumaDeArticulos);
            break;

        case "portacelular":
            sumaDeArticulos += portacelular;
            console.log(sumaDeArticulos);
            break; 

        default:
            alert("El dato ingresado no corresponde a un artículo a la venta");
            break;

        case "salir":
            compraEnProceso = false;
            break;

    }
}

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

let precioConIva = ((sumaDeArticulos + costoDeEnvio) * 1.21)

alert("La suma del costo de los artículos dentro de su carrito + el costo de envío es: $" + (sumaDeArticulos + costoDeEnvio) + " + IVA. La suma total de su compra incluyendo el IVA es: $" + precioConIva);

alert("GRACIAS POR TU COMPRA " + cliente + "! En minutos te llegará un e-mail a " + eMail + " con la factura de tu compra y los próximos pasos a seguir.");

console.log("Fin del programa");






























