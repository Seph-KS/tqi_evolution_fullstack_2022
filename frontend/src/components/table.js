function Table({vetor, selecionar}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Ano</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((livro, indice) => (
                        <tr key={indice}>
                        <td>{livro.titulo}</td>
                        <td>{livro.autor}</td>
                        <td>{livro.editora}</td>
                        <td>{livro.ano}</td>
                        <td>{livro.valor}</td>
                        <td>{livro.quantidade}</td>
                        <td><button onClick={() => {selecionar(indice)}}className="btn btn-success">Selecionar</button></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table