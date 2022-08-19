package br.com.api.livraria.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "livros")
@Getter
@Setter
public class livroModelo {
    
    @Id
    private String titulo;
    private String autor;
    private String editora;
    private String ano;
    private double valor;
    private int quantidade;
}
