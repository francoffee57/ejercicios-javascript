const arry = [1,2,2,3,3,5,,3,3,1,56,4]

const mediana = (lista)=>{
    const listaOrdenada = ordena(lista)
    let listaElentosRepetidos = []
    let listaIndices = []

    for (let i = 0; i < listaOrdenada.length; i++) {
        if(lista[i] === lista[i - 1]){
            listaElentosRepetidos.push(lista[i])  
            listaIndices.push(i)
        }    
    }

    return `La mediana es ${mayorRepetido(listaElentosRepetidos)}`

}

const mayorRepetido = (repetidos)=>{
    // let vecesRepetido = 0
    let repeticiones = 0
    let valor = 0
    let masRepetido = 0
    let resultado
    for (let i = 0; i < repetidos.length; i++) {
        if(repetidos[i] === repetidos[i - 1]){
            if(repetidos[i] === valor){
                repeticiones += 1
                if(repeticiones > masRepetido){
                    masRepetido = repeticiones;
                    console.error(repeticiones)
                    resultado = repetidos[i]
                }
            }
            else{
                valor = repetidos[i]
                repeticiones = 0
            }
        }    
    }
    return resultado
}

const ordena = (arry)=>{
    return arry.sort((a,b)=>a-b); 
}
