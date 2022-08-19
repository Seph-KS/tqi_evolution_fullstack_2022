package br.com.api.livraria.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.livraria.modelo.RespostaModelo;
import br.com.api.livraria.modelo.livroModelo;
import br.com.api.livraria.servico.LivrariaServico;

@RestController
@CrossOrigin(origins = "*")
public class LivrariaControle {
    
    @Autowired
    private LivrariaServico ls;

    @DeleteMapping("/remover/{titulo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable String titulo){
        return ls.remover(titulo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody livroModelo lm){
        return ls.cadastrarAlterar(lm, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody livroModelo lm){
        return ls.cadastrarAlterar(lm, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<livroModelo> listar(){
        return ls.listar();
    }

    @GetMapping("/")
    public String rota(){
        return "API de livros funcionando!";
    }
}
