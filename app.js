document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    handleSearch();
  });
  
  function handleSearch() {
    const input = document.getElementById('inputCep');
    const mainContent = document.getElementById('mainContent');
  
    const inputValue = input.value.trim();
  
    if (inputValue === '') {
      alert('Preencha algum cep!');
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${inputValue}/json`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado');
        } else {
          displayCepInfo(data);
        }
      })
      .catch(() => {
        alert('Ops, erro ao buscar');
      });
  
    input.value = '';
  }
  
  function displayCepInfo(cepData) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
      <h4>CEP: ${cepData.cep}</h4>
      <span>${cepData.logradouro}</span>
      <span>${cepData.complemento}</span>
      <span>${cepData.bairro}</span>
      <span>${cepData.localidade} - ${cepData.uf}</span>
    `;
  }
  