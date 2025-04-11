package com.example.moviebackend.controller;

import com.example.moviebackend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    record LoginRequest(String username, String password) {
    }

    record RegisterRequest(String username, String password) {
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String responseString = authService.login(loginRequest.username,
                loginRequest.password);
        return ResponseEntity.ok(responseString);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        String responseString = authService.register(registerRequest.username, registerRequest.password);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseString);
    }
}