/*function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,15));*///soma passando parametros

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Chile! Juntos somos mais fortes.", "Chile", "França"));*/

function validaIdade(idade){
    let validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
let idade = prompt("Qual e a sua idade?");
console.log(validaIdade(idade));
