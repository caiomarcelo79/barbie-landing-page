if (window.innerWidth >= 1260) {
  document.getElementById('cabecalho').innerHTML = '<a href="#">Filmes</a><a href="#">Séries</a>'
}

if (window.innerWidth <= 1259) {
  document.getElementById('cabecalho').innerHTML = '<div class="subMenu"></div><div class="subMenu"></div><div class="subMenu"></div>'

  document.getElementById('rodape').innerHTML = '<div>        <img src="imgs/logo.png" alt="Logo PlayCube">        <a href="#">Sobre</a>        <a href="#">Contato</a>        <a href="#">Suporte</a>        <a href="#">Adicione um Filme</a>        <a href="#">Adicione uma Série</a>      </div>      <div>        <a href="#">Discussões</a>        <a href="#">Termos de Uso</a>        <a href="#">Política de Privacidade</a>        <a href="#">Diretrizes</a>      </div>'
}

/*
'      <div>
        <img src="imgs/logo.png" alt="Logo PlayCube">
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <a href="#">Suporte</a>
        <a href="#">Adicione um Filme</a>
        <a href="#">Adicione uma Série</a>
      </div>
      <div>
        <a href="#">Discussões</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Diretrizes</a>
      </div>'
*/