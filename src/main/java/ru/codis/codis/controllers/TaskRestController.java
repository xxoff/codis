package ru.codis.codis.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.codis.codis.domain.Task;
import ru.codis.codis.repo.TaskRepo;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;


@RestController
@RequestMapping()
public class TaskRestController extends AbstractRestController<Task, TaskRepo> {
    public TaskRestController(TaskRepo repo) {
        super(repo);
    }

    private static final Logger log = LoggerFactory.getLogger(TaskRestController.class);

    @Autowired
    private TaskRepo taskRepository;

    @GetMapping("/hot")
    public ResponseEntity<List<Task>> hot() {
        List<Task> tasks = taskRepository.findAll();
        for (Task task : tasks) {
            task.setComments_this_day((task.getComments() * 1000000 / task.getDate_of_creation().getTime()));
        }
        tasks.sort(Task::compareBycommentsThisDay);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/topical")
    public ResponseEntity<List<Task>> topical() {
        List<Task> tasks = taskRepository.findAll();
        for (Task task : tasks) {
            task.setComments_this_day(task.getComments() / 10l);
        }
        tasks.sort(Task::compareBycommentsThisDay);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Task>> newest() {
        List<Task> tasks = taskRepository.findAll();
        tasks.sort(Task::compareByTime);
        return ResponseEntity.ok(tasks);
    }


    @RequestMapping(value = "/interesting", method = RequestMethod.GET)
    public ResponseEntity<List<Task>> interesting(@RequestParam(required = false, defaultValue = "1", value = "pageId") Integer pageId) {
        List<Task> tasks = taskRepository.findAll();
        tasks.sort(Task::compareByInterest);
        return ResponseEntity.ok(tasks);
    }

    @PostMapping("/add")
    public ResponseEntity<Task> add(@RequestBody Task task) {
        task.setDate_of_creation(new Timestamp(System.currentTimeMillis()));
        task.setAuthor(4);
        task.setInterest(0);
        task.setComments(0);
        task.setComments_this_day(0l);
        return ResponseEntity.ok(repo.save(task));
    }
}
