package com.example.moviebackend.service;

import com.example.moviebackend.dao.MovieDao;
import com.example.moviebackend.ds.MovieDetailsInfo;
import com.example.moviebackend.entity.Movie;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieDao movieDao;

    private List<MovieDetailsInfo> findAllMovies() {
        return movieDao.findAllMovieDetailsInfo();
    }
}
