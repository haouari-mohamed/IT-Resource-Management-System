package com.example.It.mangemenet.system.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.It.mangemenet.system.model.Notification;

import java.util.List;


public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByAdministrateurIdAndLu(Long administrateurId, boolean lu);
}