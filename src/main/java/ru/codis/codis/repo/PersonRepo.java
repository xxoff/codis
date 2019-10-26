package ru.codis.codis.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codis.codis.domain.Person;

public interface PersonRepo extends JpaRepository<Person, Long> {
}
