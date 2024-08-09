package com.example.It.mangemenet.system.repo;

import com.example.It.mangemenet.system.model.AdministrateurIT;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdministrateurITRepository extends JpaRepository<AdministrateurIT, Long> {
    Optional<AdministrateurIT> findByEmail(String email);
}
