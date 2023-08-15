public class Main {

    public static void main(String[] args){
        Cliente cliente = new Cliente();
        ItemVenda item1 = new ItemVenda();
        System.out.println("Você é de cidade " + cliente.entradaEndereco("petrpolis"));


        item1.setValorProduto(250);
        item1.setQuantidade(4);
        System.out.println("Valor total do item1: " + item1.getValorTotal());


    }

}
