alert("Bienvenido al chifa Won Tuc")
var entrada=parseInt(prompt("Ingrese el precio de la entrada"))
var platofuerte=parseInt(prompt("Ingrese el precio del plato fuerte"))
var postre=parseInt(prompt("Ingrese el precio del postre"))
var total=entrada+platofuerte+postre
var igv=(total*0.18)+total
console.log("El precio de la entrada es", entrada)
console.log("El precio del plato fuerte es", platofuerte)
console.log("El precio del postre es", postre)
console.log("La cuenta es de", total)
console.log("La cuenta total con igv es de", igv)