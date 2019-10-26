package ru.codis.codis.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codis.codis.domain.Task;

import java.util.Optional;

public interface TaskRepo extends JpaRepository<Task, Long> {

    Optional<Task> findById(Long id);
}
