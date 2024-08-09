package com.example.It.mangemenet.system.repo;

import com.example.It.mangemenet.system.model.Personne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonneRepository extends JpaRepository<Personne,Long> {
    Personne findByUsername(String username);
}
