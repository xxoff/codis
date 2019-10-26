package ru.codis.codis.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @ToString.Exclude private Long id;
    private Integer[] author;
    private String name;
    private String description;
    private Double dificulty;
    private Integer interest;

    protected Task() {
    }

    public Task(Integer[] author, String name, String description, Double dificulty, Integer interest) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.dificulty = dificulty;
        this.interest = interest;
    }
}
