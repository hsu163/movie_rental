package com.example.moviebackend.ds;

import java.time.LocalDate;

public record MovieDetailsInfo(
        Integer id,
        String title,
        String actors,
        String genre,
        String description,
        LocalDate releaseDate,
        String director,
        String imageUrl
) {
}

