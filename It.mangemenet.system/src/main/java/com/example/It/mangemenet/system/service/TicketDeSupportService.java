package com.example.It.mangemenet.system.service;

import com.example.It.mangemenet.system.model.TechnicienIT;
import com.example.It.mangemenet.system.model.TicketDeSupport;
import com.example.It.mangemenet.system.model.enums.EtatTicket;
import com.example.It.mangemenet.system.repo.TechnicienITRepository;
import com.example.It.mangemenet.system.repo.TicketDeSupportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketDeSupportService {

    @Autowired
    private TicketDeSupportRepository ticketDeSupportRepository;
    @Autowired
    private TechnicienITRepository technicianRepository;

    public TicketDeSupport creerTicketDeSupport(TicketDeSupport ticketDeSupport) {
        return ticketDeSupportRepository.save(ticketDeSupport);
    }

    public List<TicketDeSupport> getAllTicketsDeSupport() {
        return ticketDeSupportRepository.findAll();
    }

    public TicketDeSupport getTicketDeSupportById(Long id) {
        return ticketDeSupportRepository.findById(id).orElse(null);
    }

    public TicketDeSupport assignToTechnician(Long ticketId, Long technicianId) {
        TicketDeSupport ticket = ticketDeSupportRepository.findById(ticketId).orElse(null);
        if (ticket == null) {
            throw new RuntimeException("Ticket not found");
        }

        TechnicienIT technician = technicianRepository.findById(technicianId).orElse(null);
        if (technician == null) {
            throw new RuntimeException("Technician not found");
        }

        ticket.setTechnicien(technician);
        ticket.setEtat(EtatTicket.EN_COURS);
        return ticketDeSupportRepository.save(ticket);
    }

    public TicketDeSupport updateTicketDeSupport(Long id, TicketDeSupport updatedTicket) {
        TicketDeSupport existingTicket = ticketDeSupportRepository.findById(id).orElse(null);
        if (existingTicket == null) {
            throw new RuntimeException("Ticket not found");
        }
        existingTicket.setDescription(updatedTicket.getDescription());
        existingTicket.setEtat(updatedTicket.getEtat());
        existingTicket.setTechnicien(updatedTicket.getTechnicien());
        existingTicket.setDateResolution(updatedTicket.getDateResolution());

        return ticketDeSupportRepository.save(existingTicket);
    }

    public List<TicketDeSupport> getTicketsByTechnicianId(Long technicianId) {
        return ticketDeSupportRepository.findByTechnicienId(technicianId);
    }
    public void deleteTicketDeSupport(Long id) {
        ticketDeSupportRepository.deleteById(id);
    }

}