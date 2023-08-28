package br.com.lucas;

import br.com.lucas.dao.ClienteMapDAO;
import br.com.lucas.dao.IClienteDAO;
import br.com.lucas.domain.Cliente;

import javax.swing.*;

public class App {

    private static IClienteDAO iClienteDAO = new ClienteMapDAO();

    private static final String mensagemInicio = "Digite 1 para cadastro, 2 para consulta, 3 para exclusão, 4 para alteração ou 5 para sair";

    public static void main(String[] args) {

        navigator(mensagemInicio);




    }

    private static void navigator(String mensagem){
        String opcao = mostraTela(mensagem);

        switch (opcao) {
            case "1" -> cadastro();
//            case "2" -> consulta();
//            case "3" -> exclusao();
//            case "4" -> alteracao();

            case "0" -> sair();

            default -> navigator("Opção invalida! " + mensagemInicio);
        }

    }

    private static void cadastro() {
        String resultado = mostraTela("Você está na função cadastro, insira o cpf do cliente ou digite 9 para voltar ao menu inicial ou 0 para encerrar o programa");

        validaSaida(resultado);

        Long cpf = converteLong(resultado);
        if(iClienteDAO.consultar(cpf) != null){
            while(true){
                resultado = mostraTela("Esse cliente já está cadastrado em nosso banco de dados, digite 9 para voltar à tela inicial ou 0 para sair");

                validaSaida(resultado);
            }



        }



    }



    private static void validaSaida(String resultado) {
        if(resultado.equals("9")) navigator(mensagemInicio);
        if(resultado.equals("0")) sair();
    }


    private static Long converteLong(String valor){
        try{
            return Long.parseLong(valor);
        } catch (NumberFormatException ex){
            return null;
        }
    }

    private static void sair() {
        mostraTela("Saindo");
        System.exit(0);
    }

    private static String mostraTela(String texto) {
        return JOptionPane.showInputDialog(null, texto, "Cadastro", JOptionPane.INFORMATION_MESSAGE );
    }



}
