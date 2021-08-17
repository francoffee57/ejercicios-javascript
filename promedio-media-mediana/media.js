const array = [1,24,3,12]

const media = (list)=>{
    const listOrdenada = ordena(list)
    const mitad = parseInt(list.length / 2)

    if (mitad % 2 === 0){
        const resMedia = (listOrdenada[mitad] + listOrdenada[mitad - 1]) / 2
        return resMedia
    }
    else{
        return listOrdenada[mitad] 
    }
}


const ordena = (arry)=>{
    return arry.sort((a,b)=>a-b); 
}


