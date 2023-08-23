package domain;

import dao.*;

import java.util.Random;
import java.util.Scanner;
public class Main {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Vendedor vendedorAtual = null;

        System.out.println("* - * - * - * - * - * - * - * - *");
        System.out.println("* - Super mercados Super Pão! - *");
        System.out.println("* - * - * - * - * - * - * - * - *");

        IProdutoDAO iProdutoDAO = new ProdutoMapDAO();
        IVendedorDAO iVendedorDAO = new VendedorMapDAO();
        IVendaDAO iVendaDAO = new VendaMapDAO();

        if(vendedorAtual == null){

            System.out.println("Digite o cpf do vendedor que irá operar o caixa");

            Long cpfVendedor = sc.nextLong();
            Vendedor vendedorSelecionado = iVendedorDAO.consultar(cpfVendedor);

            if(vendedorSelecionado == null){

                System.out.println("Esse vendedor não está cadastrado no nosso sistema, redirecionando para cadastro");

                //TODO adicionar cadastro

            } else {
                vendedorAtual = vendedorSelecionado;
                System.out.println("Vendedor definido com sucesso!");
            }

            System.out.println("Passe os produtos para a venda");

        }

    }


    public static Long criaId(){
        Random rd = new Random();
        return Math.round((rd.nextDouble()*100000000) / 100);
    }


}
