package dao;
import domain.Venda;
import java.util.Collection;

public interface IVendaDAO {

    public Boolean cadastrar(Venda venda);

    public void excluir(Long id);

    public Venda consultar(Long id);

    public Collection<Venda> buscarTodos();
}
