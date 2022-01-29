function validarArray(arr, num){
    try{
        if( !arr && !num) throw ReferenceError("envie os parametros");
        if( typeof arr !== 'object' ) throw new TypeError ("Array precisa ser do tipo object");
        if( typeof arr !== 'object' ) throw new TypeError ("Array precisa ser do tipo number");
        if( arr.length !== num ) throw new RangeError ("Tamanho Invalido");
        return arr;
    } catch (e){
        if(e instanceof ReferenceError){
            console.log("erro do tipo ReferenceError");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("erro do tipo TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("erro do tipo RangeError");
            console.log(e.message);
        } else {
            console.log("tipo de erro não conhecido" + e);
        }
    }
    

}

console.log(validarArray())