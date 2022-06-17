package com.example;

import com.example.classes.CourseDatabase;
import java.util.Objects;
import java.util.Scanner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public Application() {
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CourseDatabase courseDatabase = new CourseDatabase();
        courseDatabase.load();
        SpringApplication.run(Application.class, args);
        System.out.print("http://localhost:8080\n\n print STOP and press ENTER to stop program\n\n");

        for(String str = ""; !Objects.equals(str.strip(), "STOP"); str = scanner.nextLine()) {
        }


        System.exit(130);
    }
}