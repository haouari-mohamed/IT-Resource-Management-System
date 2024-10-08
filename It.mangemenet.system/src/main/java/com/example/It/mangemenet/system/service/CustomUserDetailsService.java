package com.example.It.mangemenet.system.service;

import com.example.It.mangemenet.system.model.Personne;
import com.example.It.mangemenet.system.model.Utilisateur;
import com.example.It.mangemenet.system.repo.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private PersonneRepository personneRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Personne personne = personneRepository.findByUsername(username);

        return new User(personne.getUsername(), personne.getPassword(), personne.getAuthorities());
    }
}