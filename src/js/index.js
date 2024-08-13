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
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    const idPersonagem = alterarImagemPersonagemSelecionado(personagem);

    alterarFundoPersonagemSelecionado(idPersonagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagemSelecionado(personagem);
  });
});

function alterarDescricaoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById("descricao");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarFundoPersonagemSelecionado(idPersonagem) {
  const fundoPersonagem = document.querySelector(".fundo-personagem");
  fundoPersonagem.src = `./src/img/characters/fundo-${idPersonagem}.png`;
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagem = document.querySelector(".img-personagem");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagem.src = `./src/img/characters/img-${idPersonagem}.png`;
  return idPersonagem;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
