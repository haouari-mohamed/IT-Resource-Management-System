package com.example.It.mangemenet.system.security1;

import com.example.It.mangemenet.system.model.enums.Role;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtAuth {
    public static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String generateToken(String username, Role role) {
        System.out.println("///////////////////"+username+"GENERATETOKEN JWTAUTH");
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000)) // 24 hours
                .claim("roles",role)
                .signWith(SECRET_KEY)
                .compact();
    }
}