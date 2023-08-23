package dao;

import dao.IVendedorDAO;
import domain.Vendedor;

import java.util.Collection;
import java.util.Map;

public class VendedorMapDAO implements IVendedorDAO {

    public static Map<Long, Vendedor> vendedores;

    @Override
    public Boolean cadastrar(Vendedor vendedor) {
        if(vendedores.containsKey(vendedor.getCpf())){
            return false;
        }
        vendedores.put(vendedor.getCpf(), vendedor);
        return true;
    }

    @Override
    public void excluir(Long cpf) {
        Vendedor vendedorCadastrado = vendedores.get(cpf);
        if(vendedorCadastrado != null){
            vendedores.remove(cpf);
        }
    }

    @Override
    public void alterar(Vendedor vendedor) {
        Vendedor vendedorCadastrado = vendedores.get(vendedor.getCpf());
        if(vendedorCadastrado != null){
            vendedorCadastrado.setNome(vendedor.getNome());
            vendedorCadastrado.setComissao(vendedor.getComissao());
        }
    }

    @Override
    public Vendedor consultar(Long cpf) {
        return vendedores.get(cpf);
    }

    @Override
    public Collection<Vendedor> buscarTodos() {
        return vendedores.values();
    }

}
