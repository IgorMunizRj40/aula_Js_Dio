function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Você clicou!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}
function redirecionar(){
    window.open("https://google.com/");//abre em uma nova janela
    //window.location.href = "https://googletradutor.com/";//abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse";//usado com o parametro elemeto
    //document.getElementById("mouseOver").innerHTML = "passou o mouse";//usado sem o elemento
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui...";
    //document.getElementById("mouseOver").innerHTML = "trocou";//func p/ efeito de passagem do mouse
}

function load(){
    alert("Página carregada")//onload usado no body para carregar
}

function funcaoChange(elemento){
    console.log(elemento.value);
}