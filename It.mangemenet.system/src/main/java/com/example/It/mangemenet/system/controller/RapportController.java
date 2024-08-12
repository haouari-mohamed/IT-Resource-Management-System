package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.model.Rapport;
import com.example.It.mangemenet.system.service.RapportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/rapports")
public class RapportController {

    @Autowired
    private RapportService rapportService;

    @PostMapping
    public ResponseEntity<Rapport> creerRapport(@RequestBody Rapport rapport) {
        Rapport createdRapport = rapportService.creerRapport(rapport);
        return ResponseEntity.ok(createdRapport);
    }

    @GetMapping
    public ResponseEntity<List<Rapport>> getAllRapports() {
        List<Rapport> rapports = rapportService.getAllRapports();
        return ResponseEntity.ok(rapports);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rapport> getRapportById(@PathVariable Long id) {
        Rapport rapport = rapportService.getRapportById(id);
        return ResponseEntity.ok(rapport);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rapport> updateRapport(@PathVariable Long id, @RequestBody Rapport rapport) {
        rapport.setId(id);
        Rapport updatedRapport = rapportService.updateRapport(rapport);
        return ResponseEntity.ok(updatedRapport);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRapport(@PathVariable Long id) {
        rapportService.deleteRapport(id);
        return ResponseEntity.noContent().build();
    }
}
