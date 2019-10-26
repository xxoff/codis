package ru.codis.codis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import ru.codis.codis.domain.Task;
import ru.codis.codis.repo.TaskRepo;

import java.util.Optional;

@SpringBootApplication
public class CodisApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(CodisApplication.class, args);
        TaskRepo taskRepo = context.getBean(TaskRepo.class);

        Optional<Task> tasks = taskRepo.findById(1l);
        System.out.println(tasks.get());
    }

}
