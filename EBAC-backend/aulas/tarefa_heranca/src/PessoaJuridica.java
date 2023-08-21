import java.util.List;

public class PessoaJuridica extends Pessoa{

    private Long cnpj;

    private List<Pessoa> socios;




    public Long getCnpj() {
        return cnpj;
    }

    public void setCnpj(Long cnpj) {
        this.cnpj = cnpj;
    }

    public List<Pessoa> getSocios() {
        return socios;
    }

    public void setSocios(List<Pessoa> socios) {
        this.socios = socios;
    }
}
