package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.model.Panne;
import com.example.It.mangemenet.system.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/pannes")
public class PanneController {

    @Autowired
    private PanneService panneService;

    @PostMapping
    public ResponseEntity<Panne> creerPanne(@RequestBody Panne panne) {
        Panne createdPanne = panneService.creerPanne(panne);
        return ResponseEntity.ok(createdPanne);
    }

    @GetMapping
    public ResponseEntity<List<Panne>> getAllPannes() {
        List<Panne> pannes = panneService.getAllPannes();
        return ResponseEntity.ok(pannes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Panne> getPanneById(@PathVariable Long id) {
        Panne panne = panneService.getPanneById(id);
        return ResponseEntity.ok(panne);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Panne> updatePanne(@PathVariable Long id, @RequestBody Panne panne) {
        panne.setId(id);
        Panne updatedPanne = panneService.updatePanne(panne);
        return ResponseEntity.ok(updatedPanne);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable Long id) {
        panneService.deletePanne(id);
        return ResponseEntity.noContent().build();
    }
}
