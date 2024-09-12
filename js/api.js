const url = "https://eli28nomf7.execute-api.us-east-1.amazonaws.com/dev/pods";

function getPods() {
  axios
    .get(url)
    .then((response) => {
      const listaSabores = document.querySelector(".sabores");
      const nomeProduto = document
        .querySelector(".produto__titulo")
        .textContent.trim();

      console.log(response.data.produtos[0].sabores[0].quantidade);

      for (let i = 0; i < response.data.produtos.length; i++) {
        if (response.data.produtos[i].nome == nomeProduto) {
          for (
            let ii = 0;
            ii < response.data.produtos[i].sabores.length;
            ii++
          ) {
            if (response.data.produtos[i].sabores[ii].quantidade == 0) {
              continue;
            } else {
              let option = document.createElement("option");
              option.innerText = response.data.produtos[i].sabores[ii].sabor;
              listaSabores.appendChild(option);
            }
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getPods();

// Como atualizar a url com a quantidade certa sempre que mudar
