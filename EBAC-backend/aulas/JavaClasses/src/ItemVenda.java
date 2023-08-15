public class ItemVenda {

    private int quantidade;

    private int valorProduto;


    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public int getValorProduto() {
        return valorProduto;
    }

    public void setValorProduto(int valorProduto) {
        this.valorProduto = valorProduto;
    }

    public int getValorTotal(){
        return quantidade * valorProduto;
    }


}
