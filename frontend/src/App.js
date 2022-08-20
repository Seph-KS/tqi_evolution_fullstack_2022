import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {

  // objeto livro
  const livro = {
    titulo : '',
    autor : '',
    editora : '',
    ano : '',
    valor : 0,
    quantidade : 0
  }

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [livros, setLivros] = useState([]);
  const [objLivro, setObjLivro] = useState(livro);

  //useEffect
  useEffect(() => {
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setLivros(retorno_convertido));
  }, []);

  // Obter os dados do formulário
  const aoDigitar = (e) => {
    setObjLivro({...objLivro, [e.target.name] :e.target.value});
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method:'post',
      body:JSON.stringify(objLivro),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }
      else{
        setLivros([...livros, retorno_convertido]);
        alert('Livro cadastrado com sucesso!')
        limparFormulario();
      }
    })
  }

  // Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/'+objLivro.titulo, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      alert(retorno_convertido.mensagem);

      // Cria uma cópia do vetor livros
      let vetorTemp = [...livros];

      // Índice para encontrar o livro que deve ser removido
      let indice = vetorTemp.findIndex((l) => {
        return l.titulo === objLivro.titulo;
      });

      // Remove o livro da cópia do vetor livros
      vetorTemp.splice(indice, 1);

      // Atualiza o vetor livros
      setLivros(vetorTemp);

      // Limpa o formulário
      limparFormulario();
    })
  }

  // Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar/', {
      method:'put',
      body:JSON.stringify(objLivro),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }
      else{
        setLivros([...livros, retorno_convertido]);
        alert('Livro alterado com sucesso!')

        // Cria uma cópia do vetor livros
      let vetorTemp = [...livros];

      // Índice para encontrar o livro que deve ser removido
      let indice = vetorTemp.findIndex((l) => {
        return l.titulo === objLivro.titulo;
      });

      // Altera o livro da cópia do vetor livros
      vetorTemp[indice] = objLivro;

      // Atualiza o vetor livros
      setLivros(vetorTemp);

      limparFormulario();
      }
    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjLivro(livro);
    setBtnCadastrar(true);
  }

  // Selecionar livro
  const selecionarLivro = (indice) => {
    setObjLivro(livros[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div>
        <div className='container'>
      <Form id='formulario' botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objLivro} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <p> - Para Cadastrar um novo Livro preencha o formulário e clique em Cadastrar. </p>
      <p>
       - Para alterar os dados ou remover um livro completamente, escolha o livro desejado e clique em selecionar, depois Remover/Alterar.
      </p>
      <p> - Compras e Vendas devem ser registradas alterando o valor "Quantidade". </p>
      <Table className='table' vetor={livros} selecionar={selecionarLivro} />
      </div>
    </div>

  );
}

export default App;
