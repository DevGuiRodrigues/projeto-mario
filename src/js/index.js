const botaoFecharModal = document.querySelector(".fechar-modal")
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () =>{
    //Passo 4- abrir modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// Passo 2- dar um jeito de identificar quando o usuario clicar no "x"

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
});
