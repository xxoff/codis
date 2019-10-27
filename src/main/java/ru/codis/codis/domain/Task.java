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
    @ToString.Exclude private Long id;
    private Integer author;
    private String name;
    private String description;
    private Double dificulty;
    private Integer interest;
    private Timestamp date_of_creation;
    private Integer comments;
    private Long comments_this_day;

    protected Task() {
    }

    public Task(Integer author, String name, String description, Double dificulty, Integer interest, Timestamp date_of_creation, Integer comments) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.dificulty = dificulty;
        this.interest = interest;
        this.date_of_creation = date_of_creation;
        this.comments = comments;
    }

    public static int compareByInterest(Task t1, Task t2) {
        return t1.getInterest().compareTo(t2.getInterest());
    }

    public static int compareByTime(Task t1, Task t2) {
        return -1 * t1.getDate_of_creation().compareTo(t2.getDate_of_creation());
    }

    public static int compareBycommentsThisDay(Task t1, Task t2) {
        return t1.getComments_this_day().compareTo(t2.getComments_this_day());
    }
}
