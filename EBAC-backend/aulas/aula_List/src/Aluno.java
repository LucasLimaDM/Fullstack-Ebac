import java.util.Objects;

public class Aluno implements Comparable<Aluno>{

    public Aluno(String nome, Double notaGeografia, Double notaMatematica, Double notaPortugues, Double notaQuimica){

        this.nome = nome;
        this.notaGeografia = notaGeografia;
        this.notaMatematica = notaMatematica;
        this.notaPortugues = notaPortugues;
        this.notaQuimica = notaQuimica;



    }

    private String nome;
    private Double notaGeografia;

    private Double notaMatematica;

    private Double notaPortugues;

    private Double notaQuimica;

    public Double getMedia(){
        return (this.notaGeografia + this.notaPortugues + this.notaMatematica + this.notaQuimica) / 4;
    }

    public String getStatus(){
        double media = (this.notaGeografia + this.notaPortugues + this.notaMatematica + this.notaQuimica) / 4;
        if(media >= 7){
            return "APROVADO";
        } else if(media >= 5){
            return "RECUPERAÇÃO";
        } else {
            return "REPROVADO";
        }
    }






    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getNotaGeografia() {
        return notaGeografia;
    }

    public void setNotaGeografia(Double notaGeografia) {
        this.notaGeografia = notaGeografia;
    }

    public Double getNotaMatematica() {
        return notaMatematica;
    }

    public void setNotaMatematica(Double notaMatematica) {
        this.notaMatematica = notaMatematica;
    }

    public Double getNotaPortugues() {
        return notaPortugues;
    }

    public void setNotaPortugues(Double notaPortugues) {
        this.notaPortugues = notaPortugues;
    }

    public Double getNotaQuimica() {
        return notaQuimica;
    }

    public void setNotaQuimica(Double notaQuimica) {
        this.notaQuimica = notaQuimica;
    }

    @Override
    public int compareTo(Aluno aluno) {
        return this.nome.compareTo(aluno.getNome());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Aluno aluno = (Aluno) o;
        return Objects.equals(nome, aluno.nome) && Objects.equals(notaGeografia, aluno.notaGeografia) && Objects.equals(notaMatematica, aluno.notaMatematica) && Objects.equals(notaPortugues, aluno.notaPortugues) && Objects.equals(notaQuimica, aluno.notaQuimica);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, notaGeografia, notaMatematica, notaPortugues, notaQuimica);
    }
}
