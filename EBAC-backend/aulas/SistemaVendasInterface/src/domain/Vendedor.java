package domain;

import java.util.Objects;

public class Vendedor {

    private Long cpf;

    private String nome;

    private Double comissao;

    public Vendedor(Long cpf, String nome, Double comissao) {
        this.cpf = cpf;
        this.nome = nome;
        this.comissao = comissao;
    }


    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Vendedor vendedor = (Vendedor) o;

        return Objects.equals(cpf, vendedor.cpf);
    }

    @Override
    public int hashCode() {
        return cpf != null ? cpf.hashCode() : 0;
    }
}
