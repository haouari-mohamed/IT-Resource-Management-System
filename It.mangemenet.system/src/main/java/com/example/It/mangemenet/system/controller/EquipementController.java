package com.example.It.mangemenet.system.controller;

import com.example.It.mangemenet.system.model.Equipement;
import com.example.It.mangemenet.system.service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipements")
public class EquipementController {

    @Autowired
    private EquipementService equipementService;

    @PostMapping
    public ResponseEntity<Equipement> creerEquipement(@RequestBody Equipement equipement) {
        Equipement createdEquipement = equipementService.creerEquipement(equipement);
        return ResponseEntity.ok(createdEquipement);
    }

    @GetMapping
    public ResponseEntity<List<Equipement>> getAllEquipements() {
        List<Equipement> equipements = equipementService.getAllEquipements();
        return ResponseEntity.ok(equipements);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipement> getEquipementById(@PathVariable Long id) {
        Equipement equipement = equipementService.getEquipementById(id);
        return ResponseEntity.ok(equipement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Equipement> updateEquipement(@PathVariable Long id, @RequestBody Equipement equipement) {
        equipement.setId(id);
        Equipement updatedEquipement = equipementService.updateEquipement(equipement);
        return ResponseEntity.ok(updatedEquipement);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipement(@PathVariable Long id) {
        equipementService.deleteEquipement(id);
        return ResponseEntity.noContent().build();
    }
}
