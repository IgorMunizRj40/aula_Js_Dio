//===============Condicionais=====================

/*let idade = prompt("Qual e a sua idade?");//abre um box com uma pergunta
if(idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

//=================Laços============================
/*let count = 0;
while(count<=5){//enquanto
    console.log(count);
    alert(count);
    count=count+1; //ou count++
}*/

/*let count;
for(count=1; count<=10; count++){
    console.log(count);
    alert(count);
};*/

//trabalhando com data
let d = new Date();
//alert(d);
//alert(d.getMonth()+1);//carrega o mês atual
alert(d.getMinutes());//carrega o minuto atual-ainda tem o get.hora/get.day...