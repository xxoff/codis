package ru.codis.codis.domain;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @ToString.Exclude
    private Long id;
    private Integer author;
    private String name;
    private String description;
    private Double dificulty;
    private Integer interest;
    private Timestamp date_of_creation;

    protected Task() {
    }

    public Task(String name, String description, Double dificulty, Integer interest, Timestamp date_of_creation) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.dificulty = dificulty;
        this.interest = interest;
        this.date_of_creation = date_of_creation;
    }

    public static int compareByInterest(Task t1, Task t2) {
        return t1.interest.compareTo(t2.interest);
    }

    public static int compareByTime(Task t1, Task t2) {
        return t1.date_of_creation.compareTo(t2.date_of_creation);
    }
}