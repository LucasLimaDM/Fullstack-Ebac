import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;



public class Main {
    public static void main(String[] args) {

        Set<Aluno> alunos = new TreeSet<>();

        System.out.println("------   Bem vindo ao cadastro de alunos!   -------");

        navigator(alunos);

        System.out.println("------   Obrigado por usar o cadastro de alunos!   ------");
    }

    public static void navigator(Set<Aluno> alunos){
        Scanner sc = new Scanner(System.in);

        System.out.println(" ");
        System.out.println("Se deseja cadastrar um novo aluno, digite cadastro");
        System.out.println("Se deseja visualizar os alunos cadastrados, digite cadastro");
        System.out.println("Se deseja encerrar o programa, pressione qualquer tecla");

        String comando = sc.next();
        sc.nextLine();
        if(comando.equals("cadastro")){
            cadastroAluno(alunos);
        } else if(comando.equals("visualizar")){
            visualizarAlunos(alunos);
        }
    }

    public static void cadastroAluno(Set<Aluno> alunos){
        Scanner sc = new Scanner(System.in);

        System.out.println("cadastrando...");

        System.out.print("Digite o nome do aluno: ");
        String nome = sc.nextLine();
        System.out.println(" ");

        System.out.print("Digite a sua nota de Geografia: ");
        Double notaGeografia = sc.nextDouble();


        System.out.print("Digite a sua nota de Matemática: ");
        Double notaMatematica = sc.nextDouble();


        System.out.print("Digite a sua nota de Português: ");
        Double notaPortugues = sc.nextDouble();


        System.out.print("Digite a sua nota de Química: ");
        Double notaQuimica = sc.nextDouble();


        alunos.add(new Aluno(nome, notaGeografia, notaMatematica, notaPortugues, notaQuimica));

        navigator(alunos);

    }


    public static void visualizarAlunos(Set<Aluno> alunos){

        alunos.forEach(aluno -> {
            System.out.println("================================");
            System.out.println(" ");

            System.out.print("Aluno: " + aluno.getNome());
            System.out.println(" ");

            System.out.print("Geografia: " + aluno.getNotaGeografia());
            System.out.println(" ");

            System.out.print("Matemática: " + aluno.getNotaMatematica());
            System.out.println(" ");

            System.out.print("Português: " + aluno.getNotaPortugues());
            System.out.println(" ");

            System.out.print("Química: " + aluno.getNotaQuimica());
            System.out.println(" ");

            System.out.print("Média: " + aluno.getMedia());
            System.out.println(" ");
            System.out.println(" ");


            System.out.print("STATUS: " + aluno.getStatus());
            System.out.println(" ");

            System.out.println(" ");
            System.out.println("================================");


        });

        navigator(alunos);
    }


}
