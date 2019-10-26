package ru.codis.codis.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.codis.codis.domain.Task;
import ru.codis.codis.repo.TaskRepo;

@RestController
@RequestMapping("/api/mark")
public class TaskRestController extends AbstractRestController<Task, TaskRepo> {
    public TaskRestController(TaskRepo repo) {
        super(repo);
    }
}
