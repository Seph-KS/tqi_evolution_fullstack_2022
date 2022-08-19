function Form({botao}){
    return(
        <form>
            <input type='text' placeholder='Título'     className='form-control'/>
            <input type='text' placeholder='Autor'      className='form-control' />
            <input type='text' placeholder='Editora'    className='form-control' />
            <input type='text' placeholder='Ano'        className='form-control' />
            <input type='text' placeholder='Valor'      className='form-control' />
            <input type='text' placeholder='Quantidade' className='form-control' />

            {
                botao
                ?
                <input type='button' value='Cadastrar' className='btn btn-primary'/>
                :
                <div>
                    <input type='button' value='Alterar'   className='btn btn-warning' />
                    <input type='button' value='Remover'   className='btn btn-danger' />
                    <input type='button' value='Cancelar'  className='btn btn-secondary' />
                </div>
            }

        </form>
    )
}

export default Form;