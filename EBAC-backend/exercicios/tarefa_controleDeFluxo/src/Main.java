import java.util.Objects;
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        List<Aluno> alunos = new ArrayList<>();


        Scanner sc = new Scanner(System.in);
        System.out.println("------   Bem vindo ao cadastro de alunos!   -------");
        System.out.println("Veja como é feita a média das notas de um aluno: ");

        System.out.print("Digite a sua nota de Geografia: ");
        Double primeiraNota = sc.nextDouble();


        System.out.print("Digite a sua nota de Matemática: ");
        Double segundaNota = sc.nextDouble();


        System.out.print("Digite a sua nota de Português: ");
        Double terceiraNota = sc.nextDouble();


        System.out.print("Digite a sua nota de Química: ");
        Double quartaNota = sc.nextDouble();

        double mediaAprovacao = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

        System.out.println("A média de suas notas é : " + mediaAprovacao);

        if(mediaAprovacao >= 7){
            System.out.println("APROVADO");
        } else if(mediaAprovacao >= 5){
            System.out.println("RECUPERAÇÃO");
        } else {
            System.out.println("REPROVADO");
        }





        System.out.println("Para cadastrar novo aluno digite cadastro, para ver os alunos cadastrados digite visualizar. Obrigado!");
        String comando = sc.next();
        sc.nextLine();


        while(!comando.equals("sair")){

            while(comando.equals("cadastro")){
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

                System.out.print("Deseja cadastrar um novo aluno?");

                boolean cadastro = sc.next().equals("sim");
                sc.nextLine();

                if (cadastro){
                    continue;

                } else {

                    System.out.println("Deseja visualizar os alunos cadastrados?");

                    boolean visualizar = sc.next().equals("sim");
                    sc.nextLine();

                    if(visualizar){
                        comando = "visualizar";


                    } else {

                        comando = "sair";
                    }
                }
            }

            if(comando.equals("visualizar")){

                System.out.println("visualizando...");

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

                System.out.println("Deseja cadastrar um novo aluno?");

                boolean cadastro = sc.next().equals("sim");

                if(cadastro){
                    comando = "cadastro";
                } else {
                    comando = "sair";
                }

            }

        }

        System.out.println("------   Obrigado por usar o cadastro de alunos!   ------");
    }
}