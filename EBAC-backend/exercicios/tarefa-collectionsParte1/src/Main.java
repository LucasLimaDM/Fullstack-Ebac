import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;




public class Main {
    public static void main(String[] args) {

        //
        Set<Participante> participantesMasculinos = new HashSet<>();
        Set<Participante> participantesFemininos = new HashSet<>();


        System.out.println("------   Bem vindo ao cadastro de participantes da festa junina!   -------");
        System.out.println("------   Os participantes serão separados pelo sexo   -------");

        navigator(participantesMasculinos, participantesFemininos);

        System.out.println("------   Obrigado por usar o cadastro da festa junina!   ------");
    }

    public static void navigator(Set<Participante> participantesMasculinos, Set<Participante> participantesFemininos){
        Scanner sc = new Scanner(System.in);

        System.out.println(" ");
        System.out.println("Se deseja cadastrar um novo participante, digite cadastro");
        System.out.println("Se deseja visualizar os participantes cadastrados, digite visualizar");
        System.out.println("Se deseja encerrar o programa, pressione qualquer tecla");

        String comando = sc.next();
        sc.nextLine();
        if(comando.equals("cadastro")){
            cadastroParticipante(participantesMasculinos, participantesFemininos);
        } else if(comando.equals("visualizar")){
            visualizarParticipantes(participantesMasculinos);
            visualizarParticipantes(participantesFemininos);
            navigator(participantesMasculinos, participantesFemininos);
        }
    }

    public static void cadastroParticipante(Set<Participante> participantesMasculinos, Set<Participante> participantesFemininos){
        Scanner sc = new Scanner(System.in);

        System.out.println("cadastrando...");

        System.out.print("Digite o nome do(a) participante: ");
        String nome = sc.nextLine();
        System.out.println(" ");

        System.out.print("Digite o sexo do(a) participante: ");
        String sexo = sc.nextLine();
        System.out.println(" ");


        if(sexo.equals("masculino")){
            participantesMasculinos.add(new Participante(nome, sexo));
        } else {
            participantesFemininos.add(new Participante(nome, sexo));
        }


        navigator(participantesMasculinos, participantesFemininos);
    }


    public static void visualizarParticipantes(Set<Participante> participantes){

        participantes.forEach(participante -> {
            System.out.println("================================");
            System.out.println(" ");

            System.out.print("Nome: " + participante.getNome());
            System.out.println(" ");

            System.out.print("Sexo: " + participante.getSexo());
            System.out.println(" ");

            System.out.println(" ");
            System.out.println("================================");


        });
    }
}
