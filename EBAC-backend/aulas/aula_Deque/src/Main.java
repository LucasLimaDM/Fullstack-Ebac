import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Queue;

public class Main {

    public static void main(String[] args){
        System.out.println("Deque ArrayDeque");


        Deque<String> d = new ArrayDeque<String>();


        d.add("Red");
        d.add("Yellow");
        d.add("Blue");
        d.add("Green");

        for(int i = 0; i < 4; i++){
            System.out.println(d.remove());
        }

        System.out.println("Queue ArrayDeque");


        Queue<String> arrQueue = new ArrayDeque<String>();


        arrQueue.add("Red");
        arrQueue.add("Yellow");
        arrQueue.add("Blue");
        arrQueue.add("Green");

        for(int i = 0; i < 4; i++){
            System.out.println(arrQueue.remove());
        }







    }

}
