package dao;

import domain.Venda;
import domain.Vendedor;

import java.util.Collection;
import java.util.Map;

public class VendaMapDAO implements IVendaDAO{


    public static Map<Long, Venda> vendas;

    @Override
    public Boolean cadastrar(Venda venda) {
        if(vendas.containsKey(venda.getId())){
            return false;
        }
        vendas.put(venda.getId(), venda);
        return true;
    }

    @Override
    public void excluir(Long id) {
        Venda vendaCadastrado = vendas.get(id);
        if(vendaCadastrado != null){
            vendas.remove(id);
        }
    }


    @Override
    public Venda consultar(Long cpf) {
        return vendas.get(cpf);
    }

    @Override
    public Collection<Venda> buscarTodos() {
        return vendas.values();
    }
}
