/* PC */

let cabecalhoProdutos = document.querySelector(".cabecalho__item-produtos");
let listaProdutos = document.querySelector(".lista-produtos");

cabecalhoProdutos.addEventListener("mouseover", () => {
  x = window.matchMedia("(min-width: 850px)");
  if (x.matches) {
    listaProdutos.classList.add("visivel");
    listaProdutos.classList.remove("invisivel");
  }
});

cabecalhoProdutos.addEventListener("mouseout", () => {
  x = window.matchMedia("(min-width: 850px)");
  if (x.matches) {
    listaProdutos.classList.add("invisivel");
    listaProdutos.classList.remove("visivel");
  }
});

/* CELULAR */

let checkBoxProdutos = document.querySelector("#menu");
checkBoxProdutos.addEventListener("change", function () {
  x = window.matchMedia("(max-width: 849px)");
  if (x.matches) {
    if (this.checked) {
      listaProdutos.classList.add("visivel");
      listaProdutos.classList.remove("invisivel");
      let body = document.querySelector("body");
      body.addEventListener("click", function () {
        listaProdutos.classList.add("invisivel");
        listaProdutos.classList.remove("visivel");
        checkBoxProdutos.checked = true;
      });
    } else {
      listaProdutos.classList.add("invisivel");
      listaProdutos.classList.remove("visivel");
    }
  }
});

x = window.matchMedia("(max-width: 849px)");
if (x.matches) {
  let linkProdutos = document.querySelector("#link-produtos");
  linkProdutos.removeAttribute("href");
}
