package br.com.api.livraria.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.livraria.modelo.RespostaModelo;
import br.com.api.livraria.modelo.livroModelo;
import br.com.api.livraria.repositorio.LivrariaRepositorio;

@Service
public class LivrariaServico {
    
    @Autowired
    private LivrariaRepositorio lr;

    @Autowired
    private RespostaModelo rm;

    // Método para listar todos os livros
    public Iterable<livroModelo> listar(){
        return lr.findAll();
    }

    //Método para cadastrar ou alterar livros
    public ResponseEntity<?> cadastrarAlterar(livroModelo lm, String acao){
        
        if (lm.getTitulo().equals("")){
          rm.setMensagem("O título do livro é obrigatório!");  
          return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getAutor().equals("")){
            rm.setMensagem("O noem do autor é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getEditora().equals("")){
            rm.setMensagem("O nome da editora é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(lm.getAno().equals("")){
            rm.setMensagem("O ano de publicação é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else{
            if (acao.equals("cadastrar")){
                return new ResponseEntity<livroModelo>(lr.save(lm), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<livroModelo>(lr.save(lm), HttpStatus.OK);
            }

        }
    }

    // Método para remover livros
    public ResponseEntity<RespostaModelo> remover(String titulo){

        lr.deleteById(titulo);

        rm.setMensagem("O livro foi removido com sucesso!");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);

    }
}
