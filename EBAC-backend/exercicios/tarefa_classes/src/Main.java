// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        Casa casaPetropolis = new Casa();
        casaPetropolis.setDono("Julio");
        casaPetropolis.setMoradoresPrimeiroQuarto(2);
        casaPetropolis.setMoradoresSegundoQuarto(3);

        System.out.println("Bem vindo à casa de " + casaPetropolis.getDono());

        if(casaPetropolis.casaCheia()){
            System.out.println("A casa já está cheia e não aceita mais moradores");
        } else {
            System.out.println("A casa está de portas abertas a novos moradores");
        }

        if(casaPetropolis.dividindoQuarto()){
            System.out.println("Avisar aos moradores que só é permitida a estadia de duas pessoas por cômodo");
        } else {
            System.out.println("Não há moradores dividindo cômodo");
        }

        if(casaPetropolis.getNumMoradores() > 4){
            System.out.println("Será necessária a contratação de uma diarista");
        }





    }
}