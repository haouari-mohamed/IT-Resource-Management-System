package com.example.It.mangemenet.system.service;

import com.example.It.mangemenet.system.model.AdministrateurIT;
import com.example.It.mangemenet.system.model.enums.Role;
import com.example.It.mangemenet.system.repo.AdministrateurITRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.Optional;

@Service
public class AdministrateurITService {

    @Autowired
    private AdministrateurITRepository administrateurITRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void createAdminUserIfNotExist() {
        String adminEmail = "admin@example.com";
        Optional<AdministrateurIT> existingAdmin = administrateurITRepository.findByEmail(adminEmail);

        if (existingAdmin.isEmpty()) {
            AdministrateurIT admin = new AdministrateurIT();
            admin.setUsername("admin");
            admin.setEmail(adminEmail);
            admin.setRole(Role.ADMIN);
            admin.setPassword(passwordEncoder.encode("admin"));
            administrateurITRepository.save(admin);
        }
    }
}
