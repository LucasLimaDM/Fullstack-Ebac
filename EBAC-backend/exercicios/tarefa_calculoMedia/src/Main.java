
public class Main {
    public static void main(String[] args) {

        Aluno lucas = new Aluno();
        lucas.setGeografia(10);
        lucas.setMatematica(9);
        lucas.setPortugues(8.6);
        lucas.setQuimica(10);

        System.out.println(lucas.getGeografia() + lucas.getMatematica() + lucas.getPortugues() + lucas.getQuimica());

        System.out.println("A média das notas do aluno lucas é de: " + lucas.getMedia());

    }
}