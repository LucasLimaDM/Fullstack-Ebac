public class Produto {
    Produto(Long idProduto, String nome, Double preco){
        this.nome = nome;
        this.idProduto = idProduto;
        this.preco = preco;

    }

    private String nome;

    private Long idProduto;

    private Double preco;

    public void vendido(){
        System.out.println("vendido");
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }
}
