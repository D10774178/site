import java.util.InputMismatchException;
import java.util.Scanner;

public class QuadraticEquationSolver {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("请输入一元二次方程的系数a：");
            double a = scanner.nextDouble();

            System.out.print("请输入一元二次方程的系数b：");
            double b = scanner.nextDouble();

            System.out.print("请输入一元二次方程的系数c：");
            double c = scanner.nextDouble();

            double discriminant = b * b - 4 * a * c;
            if (discriminant > 0) {
                double x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                double x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                System.out.println("方程有两个不同的实数解：x1 = " + x1 + ", x2 = " + x2);
            } else if (discriminant == 0) {
                double x = -b / (2 * a);
                System.out.println("方程有一个实数解：x = " + x);
            } else {
                double realPart = -b / (2 * a);
                double imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
                System.out.println("方程有两个复数解：x1 = " + realPart + " + " + imaginaryPart + "i, x2 = " + realPart + " - " + imaginaryPart + "i");
            }
        } catch (InputMismatchException e) {
            System.out.println("输入的不是有效的数字，请重新运行程序并输入正确的数字。");
        } finally {
            scanner.close();
        }
    }
}