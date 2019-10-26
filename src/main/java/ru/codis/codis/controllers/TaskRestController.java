package ru.codis.codis.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.codis.codis.domain.Task;
import ru.codis.codis.repo.TaskRepo;

import java.util.List;


@RestController
@RequestMapping()
public class TaskRestController extends AbstractRestController<Task, TaskRepo> {
    public TaskRestController(TaskRepo repo) {
        super(repo);
    }

    private static final Logger log = LoggerFactory.getLogger(TaskRestController.class);

    @Autowired
    private TaskRepo taskRepository;

    @GetMapping
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Hello!");
    }

    @GetMapping("/new")
    public ResponseEntity<List<Task>> newest() {
        List<Task> tasks = taskRepository.findAll();
        tasks.sort(Task::compareByTime);
        return ResponseEntity.ok(tasks);
    }


    @GetMapping("/actual")
    public ResponseEntity<List<Task>> actual(@RequestParam(required = false) Integer pageNumber) {
        pageNumber = 0;
        List<Task> tasks = taskRepository.findAll();
        tasks.sort(Task::compareByInterest);
//        List<Task> resultList = new ArrayList<>();
//        for (int i = 0; i < 5; i++) {
//            if (i < tasks.size()) {
//                resultList.add(tasks.get(tasks.size() - i * pageNumber - 1));
//            }
//        }
        return ResponseEntity.ok(tasks);
    }
}
