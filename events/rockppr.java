import java.util.Random;
import java.util.Scanner;

public class rockppr {
    public static void main(String[] args) {
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);
        int userScore = 0;
        int compScore = 0;

        for (int i = 0; i < 5; i++) {
            int x = rand.nextInt(3);

            System.out.println("Enter your choice: ");
            System.out.println("1. Rock \n2. Scissor\n3. Paper\n");
            int a = sc.nextInt();

            if (x == a) {
                System.out.println("It is a tie!!");
            } else if (a == 1 && x == 2) {
                System.out.println("You win!");
                userScore++;
            } else if (a == 1 && x == 3) {
                System.out.println("You lose!!");
                compScore++;
            } else if (a == 2 && x == 1) {
                System.out.println("You lose!");
                compScore++;
            } else if (a == 2 && x == 3) {
                System.out.println("You win!!");
                userScore++;
            } else if (a == 3 && x == 1) {
                System.out.println("You win!!");
                userScore++;
            } else if (a == 3 && x == 2) {
                System.out.println("You lose!");
                compScore++;
            }

            System.out.println("Current Score - You: " + userScore + " Computer: " + compScore);
        }

        if (userScore > compScore) {
            System.out.println("Congratulations! You won the best of 5.");
        } else if (userScore < compScore) {
            System.out.println("Sorry! You lost the best of 5.");
        } else {
            System.out.println("It's a tie overall!");
        }

        sc.close();
    }
}