package com.example.moviebackend.dao;

import com.example.moviebackend.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalDao extends JpaRepository<Rental, Integer> {

}
