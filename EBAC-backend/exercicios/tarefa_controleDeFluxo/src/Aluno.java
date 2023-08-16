import java.util.Scanner;

public class Aluno {

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
}
