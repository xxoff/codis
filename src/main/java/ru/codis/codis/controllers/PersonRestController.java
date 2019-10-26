package ru.codis.codis.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.codis.codis.domain.Person;
import ru.codis.codis.repo.PersonRepo;

@RestController
@RequestMapping("/api/mark")
public class PersonRestController extends AbstractRestController<Person, PersonRepo> {
    public PersonRestController(PersonRepo repo) {
        super(repo);
    }
}
