package com.example.moviebackend.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.action.internal.OrphanRemovalAction;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String actors;
    private String genre;
    private String imageUrl;
    private String description;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;
    private String director;

    @OneToMany(mappedBy = "movies", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rental> Rentals;


    public Movie(String title, String actors, String genre, String imageUrl,String description, LocalDate releaseDate, String director) {
        this.title = title;
        this.actors = actors;
        this.genre = genre;
        this.imageUrl = imageUrl;
        this.description = description;
        this.releaseDate = releaseDate;
        this.director = director;
    }
}
