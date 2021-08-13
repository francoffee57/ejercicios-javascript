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

//Calcular el Circulo
const pi = Math.PI
const perimeterCircle = (radio) =>{
    let perimeter = ((2 * radio) * pi)
    return `El perímetro del circulo es: ${perimeter} `
}
const ariaCircle = (radio) =>{
    let aria = (pi * (radio ** 2)) 
    return `El área del circulo es: ${aria} `
}

//Conexión con HTML
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

