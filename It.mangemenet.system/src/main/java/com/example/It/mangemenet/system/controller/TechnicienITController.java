package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.model.TechnicienIT;
import com.example.It.mangemenet.system.service.TechnicienITService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/techniciens")
public class TechnicienITController {

    @Autowired
    private TechnicienITService technicienITService;

    @PostMapping
    public ResponseEntity<TechnicienIT> creerTechnicienIT(@RequestBody TechnicienIT technicienIT) {
        TechnicienIT createdTechnicien = technicienITService.creerTechnicienIT(technicienIT);
        return ResponseEntity.ok(createdTechnicien);
    }

    @GetMapping
    public ResponseEntity<List<TechnicienIT>> getAllTechnicienITs() {
        List<TechnicienIT> techniciens = technicienITService.getAllTechnicienITs();
        return ResponseEntity.ok(techniciens);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TechnicienIT> getTechnicienITById(@PathVariable Long id) {
        TechnicienIT technicien = technicienITService.getTechnicienITById(id);
        return ResponseEntity.ok(technicien);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TechnicienIT> updateTechnicienIT(@PathVariable Long id, @RequestBody TechnicienIT technicienIT) {
        technicienIT.setId(id);
        TechnicienIT updatedTechnicien = technicienITService.updateTechnicienIT(technicienIT);
        return ResponseEntity.ok(updatedTechnicien);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTechnicienIT(@PathVariable Long id) {
        technicienITService.deleteTechnicienIT(id);
        return ResponseEntity.noContent().build();
    }
}
