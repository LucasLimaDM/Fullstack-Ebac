public class Eletronico extends Produto {

    private String marca;
    private Integer potencia;

    public Eletronico(String nome, double preco, Integer potencia, String marca) {
        super(nome, preco);
        this.potencia = potencia;
        this.marca = marca;


    }


    public Integer getPotencia() {
        return potencia;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca){
        this.marca = marca;
    }

    public void setPotencia(Integer potencia){
        this.potencia = potencia;
    }
}