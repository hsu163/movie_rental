package com.example.moviebackend.service;

import com.example.moviebackend.dao.UserDao;
import com.example.moviebackend.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;

    public String login(String username, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return "Login successful";
    }

    public String register(String username, String password) {
        if (userDao.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username is already exists");
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        User savedUser = userDao.save(user);
        return "Register successful";
    }

}
