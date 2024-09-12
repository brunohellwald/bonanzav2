const sabores = document.querySelector('select[name="sabores"');
let saborLink = "";
setInterval(() => {
  let sabor = sabores.children[sabores.selectedIndex];
  let saborSelecionado = sabor.textContent;
  saborLink = saborSelecionado.split(" ").join("%20");
}, "100");

/* saborSelecionado armazena o sabor escolhido */
/* saborLink adapta saborSelecionado para Link */

const pod = document.querySelector(".produto__titulo");
let podSelecionado = pod.textContent.trim();
let podLink = podSelecionado.split(" ").join("%20");

let link = "";
setInterval(() => {
  let link =
    "https://wa.me/5585997037910?text=Ol%C3%A1!%20Eu%20desejo%20comprar%20o%20" +
    podLink +
    "%20sabor%20" +
    saborLink +
    "%2C%20por%20favor";

  const botaoCompra = document.querySelector(".produto__botao");
  botaoCompra.setAttribute("href", link);
}, "100");
