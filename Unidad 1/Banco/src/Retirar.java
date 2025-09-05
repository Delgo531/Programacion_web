public class Retirar {
    public double Retirar(double dinero, double saldo){
        double total = saldo - dinero;
        if (total < 0){
            System.out.println("Saldo insuficiente");
        } else {
            return  total;
        }
        return saldo;
    }
}
