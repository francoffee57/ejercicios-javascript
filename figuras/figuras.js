
const calSquare= (square) =>{
    let perimeter = square * 4
    let aria = square ** 2

    return `El perimetro del cuadrado es: ${perimeter}. El area es ${aria}`
}

const calTriangle = (l1, l2, base, altura) =>{
    let perimeter = (l1 + l2 + base)
    let aria = (base * altura) / 2

    return `El perimetro del triangulo es: ${perimeter}. El area es ${aria}`
}

const calCircle = (radio) =>{
    const pi = 3.1416
    let perimeter = ((pi * radio) * 2)
    let aria = (pi * (radio ** 2)) 

    return `El perimetro del circulo es: ${perimeter}. El area es ${aria}`
}
console.log(calSquare(4))
console.log(calTriangle(16.16, 16.16, 12, 15))
console.log(calCircle(2))
