function Form({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <label for='titulo'>Título</label>
            <input id='titulo' type='text' value={obj.titulo} onChange={eventoTeclado} name='titulo' placeholder='Título do livro'     className='form-control'/>

            <label for='autor'>Autor</label>
            <input id='autor' type='text' value={obj.autor} onChange={eventoTeclado} name='autor' placeholder='Nome do Autor'      className='form-control' />

            <label for='editora'>Editora</label>
            <input id='editora' type='text' value={obj.editora} onChange={eventoTeclado} name='editora' placeholder='Nome da editora'    className='form-control' />

            <label for='ano'>Publicação</label>
            <input id='ano' type='text' value={obj.ano} onChange={eventoTeclado} name='ano' placeholder='Ano da publicação'        className='form-control' />

            <label for='valor'>Preço do livro</label>
            <input id='valor' type='text' value={obj.valor} onChange={eventoTeclado} name='valor'      className='form-control' />

            <label for='quantidade'>Quantidade em Estoque</label>
            <input id='quantidade' type='text' value={ obj.quantidade} onChange={eventoTeclado} name='quantidade'  className='form-control' />

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :
                <div>
                    <input type='button' value='Alterar' onClick={alterar}  className='btn btn-warning' />
                    <input type='button' value='Remover' onClick={remover}   className='btn btn-danger' />
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary' />
                </div>
            }

        </form>
    )
}

export default Form;