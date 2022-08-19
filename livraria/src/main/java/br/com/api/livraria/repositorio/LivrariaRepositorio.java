package br.com.api.livraria.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.api.livraria.modelo.livroModelo;

@Repository
public interface LivrariaRepositorio extends CrudRepository <livroModelo, String>{
    
}
