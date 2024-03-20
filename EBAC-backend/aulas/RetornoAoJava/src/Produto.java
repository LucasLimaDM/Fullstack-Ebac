public class Produto {
    

    public Produto(String nome, Long preco) {
        this.nome = nome;
        this.preco = preco;
    }

    private String nome;
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    private Long preco;

    public Long getPreco() {
        return preco;
    }

    public void setPreco(Long preco) {
        this.preco = preco;
    }

    

}
