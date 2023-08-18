public class Participante implements Comparable<Participante>{

    private String nome;

    private String sexo;

    public Participante(String nome, String sexo){
        this.sexo = sexo;
        this.nome = nome;
    }




    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }


    @Override
    public int compareTo(Participante part) {
        return this.nome.compareTo(part.getNome());
    }
}
