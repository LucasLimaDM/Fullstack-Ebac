public class Aluno {

     private String nome;
     private double geografia;
     private double matematica;

     private double portugues;

     private double quimica;

     public double getMedia(){
         return (matematica + geografia + portugues + quimica) / 4;
    }













    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getGeografia() {
        return geografia;
    }

    public void setGeografia(double geografia) {
        this.geografia = geografia;
    }

    public double getMatematica() {
        return matematica;
    }

    public void setMatematica(double matematica) {
        this.matematica = matematica;
    }

    public double getPortugues() {
        return portugues;
    }

    public void setPortugues(double portugues) {
        this.portugues = portugues;
    }

    public double getQuimica() {
        return quimica;
    }

    public void setQuimica(double quimica) {
        this.quimica = quimica;
    }
}
