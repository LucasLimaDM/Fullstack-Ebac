import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o nome do aluno: ");
        String nomeW = sc.nextLine();

        System.out.print("Digite a idade do aluno: ");
        int idade = sc.nextInt();

        System.out.print("Digite o CR do aluno: ");
        float cr = sc.nextFloat();

        System.out.print("O aluno é deficiente? true/false: ");
        boolean isDeficiente = sc.nextBoolean();

        Integer idadeW = idade;

        Double crW = (double) cr;

        Boolean isDeficienteW = isDeficiente;




        System.out.println(" = = = Dados do aluno = = = ");
        System.out.println("Nome: " + nomeW);
        System.out.println("Idade: " + idadeW);
        System.out.println("CR: " + crW);
        System.out.println("Deficiencia: " + isDeficienteW);






    }
}