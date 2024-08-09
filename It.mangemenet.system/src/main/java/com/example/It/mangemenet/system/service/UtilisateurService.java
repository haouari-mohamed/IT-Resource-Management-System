package com.example.It.mangemenet.system.service;

import com.example.It.mangemenet.system.dto.UtilisateurDTO;
import com.example.It.mangemenet.system.model.Utilisateur;
import com.example.It.mangemenet.system.repo.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public UtilisateurDTO creerUtilisateur(UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setUsername(utilisateurDTO.getUsername());
        utilisateur.setEmail(utilisateurDTO.getEmail());
        utilisateur.setPassword(utilisateurDTO.getPassword());

        Utilisateur savedUtilisateur = utilisateurRepository.save(utilisateur);

        return convertToDTO(savedUtilisateur);
    }

    public List<UtilisateurDTO> getAllUtilisateurs() {
        return utilisateurRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private UtilisateurDTO convertToDTO(Utilisateur utilisateur) {
        UtilisateurDTO dto = new UtilisateurDTO();
        dto.setId(utilisateur.getId());
        dto.setUsername(utilisateur.getUsername());
        dto.setEmail(utilisateur.getEmail());
        return dto;
    }
}