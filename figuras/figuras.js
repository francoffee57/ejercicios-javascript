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

    const restSquare = document.getElementById("RestSquare")
    restSquare.innerText = perimeterSquare(value) + "unidades"
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputSquare")
    const value = input.value

    const restSquare = document.getElementById("RestSquare")
    restSquare.innerText = ariaSquare(value) + "unidades^2"
}

//Tríangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangleL1")
    const l1 = parseFloat(input1.value)

    const input2 = document.getElementById("InputTriangleL2")
    const l2 = parseFloat(input2.value)

    const input3 = document.getElementById("InputTriangleBase")
    const base = parseFloat(input3.value)

    const restTriangle = document.getElementById("RestTriangle")
    restTriangle.innerText = perimeterTriangle(l1, l2, base) + "unidades"
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangleBase")
    const base = parseFloat(input3.value)

    const input4 = document.getElementById("InputTriangleHeight")
    const altura = parseFloat(input4.value)

    const restTriangle = document.getElementById("RestTriangle")
    restTriangle.innerText = areaTriangle(base, altura) + "unidades^2"
}
//Círculo
function calcularPerimetrocirculo(){
    const input = document.getElementById("InputCircle")
    const value = input.value

    const RestCircle = document.getElementById("RestCircle")
    RestCircle.innerText = perimeterCircle(value) + "unidades"
}
function calcularAreacirculo(){
    const input = document.getElementById("InputCircle")
    const value = input.value

    const RestCircle = document.getElementById("RestCircle")
    RestCircle.innerText = ariaCircle(value) + "unidades^2"
}

//nav
const square = document.getElementById('square')
const triangle = document.getElementById('triangle')
const circle = document.getElementById('circle')

const navSquare = document.getElementById('navSquare')
const navTriangle = document.getElementById('navTriangle')
const navCircle = document.getElementById('navCircle')

window.addEventListener('scroll', ()=>{
    
    let locationSquare = square.getBoundingClientRect().top
    let locationTriangle = triangle.getBoundingClientRect().top
    let locationCircle = circle.getBoundingClientRect().bottom
    console.log(locationCircle)

    if(locationSquare <= 300 && locationSquare >= -20){
        styles(navSquare, navTriangle, navCircle)
    }
    if(locationSquare <= -21 && locationTriangle >= -60){
        styles(navTriangle, navSquare, navCircle)
    }
    if(locationTriangle <= -61 || locationCircle < 780){
        styles(navCircle, navSquare, navTriangle)
    }
})


const styles = (pon,quita1,quita2)=>{
    if(pon.classList.contains('nav--opacity')){
        if(quita1.classList.contains('nav--opacity')){
            quita1.classList.remove('nav--opacity')
        }
        if(quita2.classList.contains('nav--opacity')){
            quita2.classList.remove('nav--opacity')
        }
    }
    else{
        pon.classList.add('nav--opacity')
    }
}


