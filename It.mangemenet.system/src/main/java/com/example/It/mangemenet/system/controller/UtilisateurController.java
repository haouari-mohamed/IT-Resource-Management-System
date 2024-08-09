package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.dto.UtilisateurDTO;
import com.example.It.mangemenet.system.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<UtilisateurDTO> creerUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {

        utilisateurDTO.setPassword(passwordEncoder.encode(utilisateurDTO.getPassword()));

        UtilisateurDTO createdUtilisateur = utilisateurService.creerUtilisateur(utilisateurDTO);
        return ResponseEntity.ok(createdUtilisateur);
    }

    @GetMapping
    public ResponseEntity<List<UtilisateurDTO>> getAllUtilisateurs() {
        List<UtilisateurDTO> utilisateurs = utilisateurService.getAllUtilisateurs();
        return ResponseEntity.ok(utilisateurs);
    }
}
