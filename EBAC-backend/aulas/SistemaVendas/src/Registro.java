import java.util.HashMap;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.Map;


public class Registro {

    public static Map<Long, Vendedor> vendedores = new HashMap<Long, Vendedor>();
    public static Set<Produto> produtos = new HashSet<>();
    public static Set<Venda> vendas = new HashSet<>();
    public static Vendedor vendedorAtual;
    public static Venda vendaAtual;
    public static Produto produtoAtual;

    public static Long criaId(){
        Random rd = new Random();
        return Math.round((rd.nextDouble()*100000000) / 100);
    }

}
