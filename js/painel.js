/* 
quando clicar na seta avancar temos que esconder todas as imagens e mosrar a proxima imagem
    
   *a imgem atual comeca em 0 pq é a primeira

   *assim que for clicado no avancar eu preciso adicionar mais 1 ao contador de imagens
   pra poder saber que agr vou mostrar a segunda imagem

  *esconder todas as imagens
    pegar todas as imagens e usando o DOM e remover a classe mostrar
     
    mostrar a proxima imagem descobrir qual é a proxima e colocar a classe mostrar nela

*/
//console .log é pra cmseguir ver oq ta aconecendo no codigo na aba inpecionar e ter acesso as coisa ja feitas no html 

//queryselector é pra buscar todos seletore atrasves do parametro entre parentes


const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0
//elemtento btn ta la no html no id das setas

//let é pq vai alterar o valor dela


function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}
function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

//evento de click
//quando clicar na seta avancar temos que esconder todas as imagens e mosrar a proxima imagem


setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++        
    }

    esconderImagens()
    mostrarImagem()
})


    //a imgem atual comeca em 0 pq é a primeiraassim que for clicado no avancar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agr vou mostrar a segunda imagem

    setaVoltar.addEventListener('click', function () {
        if (imagemAtual !== 0) {
            imagemAtual--
        }
    
        esconderImagens()
        mostrarImagem()
    })


// esse ++ é pega o valor de 0 que seria a imagem 0 e add 1

//esconder todas as imagens pegar todas as imagens e usando o DOM e remover a classe mostrar
//percorrer a imagem forech
/*
 mostrar a proxima imagem descobrir qual é a proxima e colocar a classe mostrar nela
*/