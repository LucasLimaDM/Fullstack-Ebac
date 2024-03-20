import java.util.*;

public class App {
    int numero = 34;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Produto> produtos = new ArrayList<Produto>();
        System.out.println("Insira um iem para sua lista de compras");
        String nomeProduto = sc.nextLine();

        System.out.println("Insira o preço do produto");

        Long precoProduto = sc.nextLong();
        produtos.add(new Produto(nomeProduto, precoProduto));

        System.out.println(produtos);


    }
}
