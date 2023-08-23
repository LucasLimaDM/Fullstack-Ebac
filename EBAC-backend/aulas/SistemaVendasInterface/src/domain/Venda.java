package domain;

import java.util.List;

public class Venda {

    private Long id;

    private Vendedor vendedor;

    private List<Produto> produtos;

    public Venda() {
        this.id = Main.criaId();
    }

    public void add(Produto produto){
        produtos.add(produto);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Vendedor getVendedor() {
        return vendedor;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}
