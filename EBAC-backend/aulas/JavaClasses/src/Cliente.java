public class Cliente {



    private int codigo;

    private String name;

    private String endereco;



    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }


    /**
     * Método que adiciona endereço ao objeto cliente
     *
     * @deprecated
     * @see  int entradaEndereco(String endereco)
     */
    public void cadastrarEndereco(String endereco){
        setEndereco(endereco);
        System.out.println("Endereço alterado com sucesso");
    }

    public String entradaEndereco(String endereco){

        System.out.println("Endereco cadastrado com sucesso");


        if(endereco.equals("petrópolis")){
            setEndereco(endereco);
            System.out.println("Você é da mesma cidade que eu!");
            return "igual";
        } else {
            System.out.println("Você não é da mesma cidade que eu, bem vindo!");
            return "diferente";
        }



    }







}
