import java.util.*;

import static java.lang.System.*;

public class Separator {
    public static void main(String[] args){
        System.out.println(" ");
        Scanner sc = new Scanner(in);

        out.println("==== - - - Bem vindo ao programa separa nome! - - - ====");
        out.println("--- Digite os nomes que serão separados espaçados com uma \",\"");

        List<String> nomesSeparados = Arrays.asList(sc.nextLine().split(","));
        Collections.sort(nomesSeparados);
        nomesSeparados.forEach(nome -> out.println("Nome: " + nome));




        System.out.println("==== - - - Ótimo, agora registre com base nos nomes e sexos - - - ====");
        System.out.println("--- Use o modelo nome-sexo,nome-sexo");
        Map<String, String> mapaNomesSexosMasculinos = new HashMap<>();
        Map<String, String> mapaNomesSexosFemininos = new HashMap<>();
        String[] nomesSexos = sc.nextLine().split(",");

        for(String nomeSexo : nomesSexos){
            String[] newNomeSexo = nomeSexo.split("-");
            if(newNomeSexo[1].equals("masculino") || newNomeSexo[1].equals("m")) {
                mapaNomesSexosMasculinos.put(newNomeSexo[0], newNomeSexo[1]);
            } else if(newNomeSexo[1].equals("feminino") || newNomeSexo[1].equals("f")) {
                mapaNomesSexosFemininos.put(newNomeSexo[0], newNomeSexo[1]);
            }
        }

        Set<Map.Entry<String, String>> femininos = mapaNomesSexosFemininos.entrySet();
        Set<Map.Entry<String, String>> masculinos = mapaNomesSexosMasculinos.entrySet();

        out.println("Pessoas do sexo feminino registradas: ");
        femininos.forEach(keyValue -> {

            out.println("Nome:" + keyValue.getKey());
            out.println("Sexo: Feminino");

            out.println(" ");

        });

        out.println("Pessoas do sexo masculino registradas: ");

        masculinos.forEach(keyValue -> {

            out.println("Nome: " + keyValue.getKey());
            out.println("Sexo: masculino");

            out.println(" ");

        });




        

    }
}
