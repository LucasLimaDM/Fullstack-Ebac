import java.util.ArrayList;
import java.util.List;


public class Venda {

    Venda(Long idVenda, Vendedor vendedor){
        this.idVenda = idVenda;
        this.vendedor = vendedor;
    }
    private Long idVenda;

    private Vendedor vendedor;

    private List<Produto> produtos = new ArrayList<>();

    public void add(Produto produto){
        produtos.add(produto);
    }

    public static void criaVenda(){
        if(Registro.vendedorAtual == null){
            Vendedor.setVendedor();
        }
        new Venda(Registro.criaId() ,Registro.vendedorAtual);
    }


    public Long getIdVenda() {
        return idVenda;
    }

    public void setIdVenda(Long idVenda) {
        this.idVenda = idVenda;
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
