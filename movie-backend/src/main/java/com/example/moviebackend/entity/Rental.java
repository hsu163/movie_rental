package com.example.moviebackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String status;

    private LocalDate addedDate;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movies;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;
}
