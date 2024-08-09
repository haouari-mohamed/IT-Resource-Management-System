package com.example.It.mangemenet.system.dto;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass

public class UtilisateurDTO {
    private Long id;
    private String username;
    private String email;
    private String password;
}