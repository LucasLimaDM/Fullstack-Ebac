package dao;
import domain.Vendedor;
import java.util.Collection;


public interface IVendedorDAO {

    public Boolean cadastrar(Vendedor vendedor);

    public void excluir(Long id);

    public void alterar(Vendedor vendedor);

    public Vendedor consultar(Long id);

    public Collection<Vendedor> buscarTodos();

}
