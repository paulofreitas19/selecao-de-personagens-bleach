/*

    OBJETIVO 1 - quando a pessoa passar o mouse em cima do icone do personagem na listagem, devemos selecinoná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2 - adicionar a classe no personagem que o usuário passar o cursor do mouse

        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção
        dele
        
    OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem, o nome e a descrição do personagem
        passo 1 - pegar o elemento do personagem pra adicionar as informações nele

        passo 2 - alterar a imagem do personagem

        passo 3 - alterar o nome do personagem

        passo 4 - alterar a descrição do personagem

        passo 5 - alterar o fundo do personagem


*/

const personagens = document.querySelectorAll(".icone-personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const personagemSelecionado = document.querySelector(".selecionado");

    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    const imagemPersonagem = document.querySelector(".img-personagem");

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagem.src = `./src/img/characters/img-${idPersonagem}.png`;

    const fundoPersonagem = document.querySelector(".fundo-personagem");
    fundoPersonagem.src = `./src/img/characters/fundo-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById("nome");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    const descricaoPersonagem = document.getElementById("descricao");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});
