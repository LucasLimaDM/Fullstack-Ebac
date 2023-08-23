public class Vendedor {

    Vendedor(Long idVendedor, String nome, Double comissao){
        this.comissao = comissao;
        this.idVendedor = idVendedor;
        this.nome = nome;
    }

    private Long idVendedor;

    private String nome;

    private Double comissao;


    public static void setVendedor(){

    }

    public Long getIdVendedor() {
        return idVendedor;
    }

    public void setIdVendedor(Long idVendedor) {
        this.idVendedor = idVendedor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getComissao() {
        return comissao;
    }

    public void setComissao(Double comissao) {
        this.comissao = comissao;
    }
}
