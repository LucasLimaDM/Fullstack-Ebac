/**
 * @author lucas dias
 */
public class Casa {

    private String dono;

    private int moradoresPrimeiroQuarto;

    private int moradoresSegundoQuarto;


    /**
     * Método para validar se todos os quartos já estão ocupados
     *
     * @return boolean Se a casa estiver com os dois quartos ocupados, retorna true
     */

    public boolean casaCheia(){

        return (moradoresPrimeiroQuarto > 0) && (moradoresSegundoQuarto > 0);

    }

    /**
     * Método para validar se há algum quarto com mais de duas pessoas
     *
     * @return boolean Se o quarto um ou dois estiverem com mais de duas pessoas, retorna true
     */
    public boolean dividindoQuarto(){
        return (moradoresPrimeiroQuarto > 2 || moradoresSegundoQuarto > 2);
    }

    public int getNumMoradores(){
        return moradoresPrimeiroQuarto + moradoresSegundoQuarto;
    }














    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public int getMoradoresPrimeiroQuarto() {
        return moradoresPrimeiroQuarto;
    }

    public void setMoradoresPrimeiroQuarto(int moradoresPrimeiroQuarto) {
        this.moradoresPrimeiroQuarto = moradoresPrimeiroQuarto;
    }

    public int getMoradoresSegundoQuarto() {
        return moradoresSegundoQuarto;
    }

    public void setMoradoresSegundoQuarto(int moradoresSegundoQuarto) {
        this.moradoresSegundoQuarto = moradoresSegundoQuarto;
    }












}
