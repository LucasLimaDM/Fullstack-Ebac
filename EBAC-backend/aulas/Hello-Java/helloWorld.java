public class helloWorld {

    public static void main(String[] args){
        String nome = args[0];

        System.out.println("Você foi identificado como" + " " + nome);

        if(nome.equals("Lucas")){
            System.out.println("Você tem acesso aos diretórios pois é o administrador");
        } else if(nome.equals("Ana Beatriz")){
            System.out.println("Você tem acesso aos diretórios pois é esposa do administrador");
        } else {
            System.out.println("Você não tem acesso aos diretórios, peça acesso ao administrador");
        }
    }
}