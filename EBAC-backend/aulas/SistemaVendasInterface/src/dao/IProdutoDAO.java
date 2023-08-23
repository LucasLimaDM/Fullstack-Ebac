package dao;

import domain.Produto;

import java.util.Collection;
import java.util.List;

public interface IProdutoDAO {
    public Boolean cadastrar(Produto produto);

    public void excluir(Long id);

    public void alterar(Produto produto);

    public Produto consultar(Long id);

    public Collection<Produto> buscarTodos();



}
