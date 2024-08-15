package com.example.It.mangemenet.system.repo;
import com.example.It.mangemenet.system.model.TicketDeSupport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketDeSupportRepository extends JpaRepository<TicketDeSupport, Long> {
    List<TicketDeSupport> findByTechnicienId(Long technicianId);
}
