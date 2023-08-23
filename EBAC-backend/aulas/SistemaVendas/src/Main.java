import java.util.*;

public class Main {
    public static void main(String[] args) {
        Registro.vendedores.add(new Vendedor(385938L, "Carlos", 0.1));
        Registro.vendedores.add(new Vendedor(857385L, "Fernando", 0.15));
        Registro.vendedores.add(new Vendedor(947294L, "José", 0.8));


        Registro.produtos.add(new Produto(256425L, "farinha de rosca", 8.50));
        Registro.produtos.add(new Produto(755376L, "farinha de trigo", 5.60));
        Registro.produtos.add(new Produto(285735L, "fubá", 5.00));






        iniciaVenda();

    }

    public static void iniciaVenda(){
        Scanner sc = new Scanner(System.in);

        System.out.println(" * - * - * - * - * - * - * - * - * - *");
        System.out.println(" * - - Super mercados Super Pão! - - *");
        System.out.println(" * - * - * - * - * - * - * - * - * - *");
        System.out.println(" ");

        System.out.println("Entre com o nome do caixa que irá operar o terminal: ");
        String nomeVendedorAtual = sc.nextLine();

        if()

        for (Vendedor vendedor : Registro.vendedores){
            if(vendedor.getNome().equalsIgnoreCase(nomeVendedorAtual)){
                Registro.vendedorAtual = vendedor;
                break;
            }
        }
        if(Registro.vendedorAtual == null){
            System.out.println("Vendedor não encontrado nos vendedores registrados, redirecionando para cadastro de vendedor");
            cadastroVendedor();
        }



        Registro.vendaAtual = new Venda(Registro.criaId(), Registro.vendedorAtual);


        System.out.println("Caixa disponível para adição de produtos");
        System.out.println("Passe cada produto pelo seu nome");
        String nomeProdutoAtual = sc.nextLine();

        for(Produto produto : Registro.produtos){
            if(produto.getNome().equalsIgnoreCase(nomeProdutoAtual)){
                Registro.produtoAtual = produto;
                break;
            }
        }
        if(!Registro.produtoAtual.getNome().equalsIgnoreCase(nomeProdutoAtual)){
            System.out.println("Produto não encontrado nos produtos registrados, redirecionando para cadastro de produto");
            cadastroProduto();
        }





    }

    private static void cadastroProduto() {
        Scanner sc = new Scanner(System.in);


        System.out.println(" * - * - * - * - * - * - * - * - * - *");
        System.out.println(" * - - -  Cadastro de Produto  - - - *");
        System.out.println(" * - * - * - * - * - * - * - * - * - *");


        System.out.println("Entre com o nome do produto: ");
        String nomeProduto = sc.nextLine();

        System.out.println("Agora, entre com o preço do produto");
        Double precoProduto = sc.nextDouble();

        System.out.println("Gerando id do Vendedor...");
        Long idProduto = Registro.criaId();

        Registro.produtos.add(new Produto(idProduto, nomeProduto, precoProduto));
        System.out.println("Produto adicionado ao registro! Vamos te redirecionar para a página de vendas de volta");
        iniciaVenda();
    }

    private static void cadastroVendedor() {
        Scanner sc = new Scanner(System.in);


        System.out.println(" * - * - * - * - * - * - * - * - * - *");
        System.out.println(" * - - -  Cadastro de Vendedor - - - *");
        System.out.println(" * - * - * - * - * - * - * - * - * - *");


        System.out.println("Entre com o nome do vendedor: ");
        String nomeVendedor = sc.nextLine();

        System.out.println("Agora, entre com sua comissão");
        Double comissaoVendedor = sc.nextDouble();

        System.out.println("Gerando id do Vendedor...");
        Long idVendedor = Registro.criaId();

        Registro.vendedores.add(new Vendedor(idVendedor, nomeVendedor, comissaoVendedor));
        System.out.println("Vendedor adicionado ao registro! Vamos te redirecionar para a página de vendas de volta");
        iniciaVenda();

    }




}
