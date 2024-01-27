function incrementarContador() {
    if (localStorage.getItem('contadorAcessos')) {
      let contador = parseInt(localStorage.getItem('contadorAcessos'), 10);
      contador++;
      localStorage.setItem('contadorAcessos', contador);
      exibirContador(contador);
    } else {
      localStorage.setItem('contadorAcessos', 1);
      exibirContador(1);
    }
  }
  
  function exibirContador(contador) {
    const contadorElemento = document.getElementById('contadorAcessos');
    contadorElemento.textContent = `ACESSOS : ${contador} `;
  }
  
  incrementarContador();
  