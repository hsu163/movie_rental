package com.example.moviebackend.dao;

import com.example.moviebackend.ds.MovieDetailsInfo;
import com.example.moviebackend.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieDao extends JpaRepository<Movie, Integer> {

    @Query("""
    select new com.example.moviebackend.ds.MovieDetailsInfo(
        m.id, m.title, m.actors, m.genre, 
        m.description, m.releaseDate, m.director,m.imageUrl
    ) 
    from Movie m where m.id = ?1
""")
    MovieDetailsInfo findMovieDetailsById(Integer movieId);

    @Query("""
    select new com.example.moviebackend.ds.MovieDetailsInfo(
        m.id, m.title, m.actors, m.genre, 
        m.description, m.releaseDate, m.director,m.imageUrl
    ) 
    from Movie m
    """)
    List<MovieDetailsInfo> findAllMovieDetailsInfo();
}
