//Calcuar el Cuadrado
const perimeterSquare= (square) =>{
    let perimeter = square * 4
    return `El perímetro del cuadrado es: ${perimeter} `
}
const ariaSquare= (square) =>{
    let aria = square ** 2
    return `El área del cuadrado es ${aria} `
}

//Callcular el Triangulo
const perimeterTriangle = (l1, l2, base) =>{
    let perimeter = (l1 + l2 + base)
    return `El perímetro del triangulo es: ${perimeter} `
}
const areaTriangle = (base, altura) =>{
    let aria = (base * altura) / 2
    return `El área del triangulo es: ${aria} `
}

//Calcular el Círculo
const pi = Math.PI
const perimeterCircle = (radio) =>{
    let perimeter = ((2 * radio) * pi)
    return `El perímetro del círculo es: ${perimeter} `
}
const ariaCircle = (radio) =>{
    let aria = (pi * (radio ** 2)) 
    return `El área del círculo es: ${aria} `
}

//--Conexión con HTML
//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputSquare")
    const value = input.value

    alert( perimeterSquare(value) + "unidades")
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputSquare")
    const value = input.value

    alert( ariaSquare(value) + "unidades^2")
}
//Tríangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangleL1")
    const l1 = parseFloat(input1.value)

    const input2 = document.getElementById("InputTriangleL2")
    const l2 = parseFloat(input2.value)

    const input3 = document.getElementById("InputTriangleBase")
    const base = parseFloat(input3.value)

    alert( perimeterTriangle(l1, l2, base) + "unidades")
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangleBase")
    const base = parseFloat(input3.value)

    const input4 = document.getElementById("InputTriangleHeight")
    const altura = parseFloat(input4.value)
    alert( areaTriangle(base, altura) + "unidades^2")
}
//Círculo
function calcularPerimetrocirculo(){
    const input = document.getElementById("InputCircle")
    const value = input.value

    alert( perimeterCircle(value) + "unidades")
}
function calcularAreacirculo(){
    const input = document.getElementById("InputCircle")
    const value = input.value

    alert( ariaCircle(value) + "unidades^2")
}