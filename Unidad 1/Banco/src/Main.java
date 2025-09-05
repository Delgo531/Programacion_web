import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        Depositar depositar = new Depositar();
        Retirar retirar = new Retirar();
        Consultar consultar = new Consultar();

        double saldo = 0;
        int menu = 0;

        do {

            System.out.println("***************\nMenu Principal\n***************");
            System.out.println("1. Depositar");
            System.out.println("2. Retirar");
            System.out.println("3. Consultar");
            System.out.println("4. Salir ->");
            menu = scan.nextInt();

            switch(menu){
                case 1:
                    System.out.println("Ingrese el dinero a depostiar: ");
                    saldo = depositar.Depositar(scan.nextDouble(), saldo);
                    break;
                case 2:
                    System.out.println("Ingrese el dinero a retirar: ");
                    saldo = retirar.Retirar(scan.nextDouble(), saldo);
                    break;
                case 3:
                    consultar.Consultar(saldo);
                    break;
                case 4:
                    System.out.println("Saliendo");
                    break;
                default:
                    System.out.println("Opcion Incorrecta");
                    break;
            }
        } while (menu != 4);
    }
}