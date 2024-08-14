package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.model.TicketDeSupport;
import com.example.It.mangemenet.system.service.TicketDeSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tickets")
public class TicketDeSupportController {

    @Autowired
    private TicketDeSupportService ticketDeSupportService;

    @PostMapping
    public ResponseEntity<TicketDeSupport> creerTicketDeSupport(@RequestBody TicketDeSupport ticketDeSupport) {
        TicketDeSupport createdTicket = ticketDeSupportService.creerTicketDeSupport(ticketDeSupport);
        return ResponseEntity.ok(createdTicket);
    }

    @GetMapping
    public ResponseEntity<List<TicketDeSupport>> getAllTicketsDeSupport() {
        List<TicketDeSupport> tickets = ticketDeSupportService.getAllTicketsDeSupport();
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TicketDeSupport> getTicketDeSupportById(@PathVariable Long id) {
        TicketDeSupport ticket = ticketDeSupportService.getTicketDeSupportById(id);

        return ResponseEntity.ok(ticket);
    }

    @PutMapping("/{id}/assign")
    public ResponseEntity<TicketDeSupport> assignToTechnician(
            @PathVariable Long id,
            @RequestParam Long technicianId) {
        TicketDeSupport updatedTicket = ticketDeSupportService.assignToTechnician(id, technicianId);
        return ResponseEntity.ok(updatedTicket);
    }
    @PutMapping("/{id}")
    public ResponseEntity<TicketDeSupport> updateTicketDeSupport(
            @PathVariable Long id,
            @RequestBody TicketDeSupport updatedTicket) {
        TicketDeSupport ticket = ticketDeSupportService.updateTicketDeSupport(id, updatedTicket);
        return ResponseEntity.ok(ticket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicketDeSupport(@PathVariable Long id) {
        ticketDeSupportService.deleteTicketDeSupport(id);
        return ResponseEntity.noContent().build();
    }
}
