package com.example.moviebackend;

import com.example.moviebackend.dao.MovieDao;
import com.example.moviebackend.entity.Movie;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;

@SpringBootApplication
@RequiredArgsConstructor

public class MovieBackendApplication {

    private final MovieDao movieDao;

    @Bean @Profile("dev")
    public ApplicationRunner runner1(){
        return r ->{
            Movie m1 = new Movie("Inception", "Leonardo DiCaprio", "Sci-Fi",
                    "A thief who enters dreams to steal secrets","Inception follows" +
                    " a thief who enters dreams to implant an idea, blurring reality and illusion in a high-stakes mission.", LocalDate.of(2010,7, 16), "Christopher Nolan");
            Movie m2 = new Movie("Interstellar", "Matthew McConaughey", "Sci-Fi",
                    "A team of explorers travels through a wormhole in search of a new home for humanity.",
                    "Interstellar follows astronauts venturing into a wormhole to find a habitable planet, facing time dilation and emotional struggles.",
                    LocalDate.of(2014, 11, 7), "Christopher Nolan");
            movieDao.save(m1);
            movieDao.save(m2);


        };
    }

    public static void main(String[] args) {
        SpringApplication.run(MovieBackendApplication.class, args);
    }

}
