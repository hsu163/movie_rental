package com.example.moviebackend.controller;

import com.example.moviebackend.dao.MovieDao;
import com.example.moviebackend.ds.MovieDetailsInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/movies")

public class HomeController {
    private final MovieDao movieDao;

    // Get all movies
    @GetMapping
    public List<MovieDetailsInfo> getAllMovies() {
        return movieDao.findAllMovieDetailsInfo();
    }

    // Get a specific movie by ID
    @GetMapping("/{id}")
    public MovieDetailsInfo getMovieById(@PathVariable Integer id) {
        return movieDao.findMovieDetailsById(id);
    }
}
