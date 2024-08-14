package com.example.It.mangemenet.system.controller;


import com.example.It.mangemenet.system.model.Personne;
import com.example.It.mangemenet.system.model.enums.Role;
import com.example.It.mangemenet.system.repo.PersonneRepository;
import com.example.It.mangemenet.system.security1.JwtAuth;
import com.example.It.mangemenet.system.service.CustomUserDetailsService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class AuthenticationController {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PersonneRepository personneRepository;


    @PostMapping("/auth")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody Personne authenticationRequest) {
        System.out.println("//////////////////auuuuuthcon");
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
        );
         Personne personne = personneRepository.findByUsername(authenticationRequest.getUsername());
        Role role= personne.getRole();
        String token = JwtAuth.generateToken(authenticationRequest.getUsername(),role);
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("role", role.name());
        return ResponseEntity.ok(response);

    }
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test endpoint working");
    }

}