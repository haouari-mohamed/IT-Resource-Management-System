// equipment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Equipement, EtatEquipement } from 'src/app/model/global.model';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  equipements: Equipement[] = [];
  etatEquipement = EtatEquipement;

  constructor(private equipementService: EquipementService) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipementService.getAllEquipements().subscribe(
      (data: Equipement[]) => this.equipements = data,
      error => console.error('Error fetching equipments:', error)
    );
  }

  deleteEquipment(id: number): void {
    this.equipementService.deleteEquipement(id).subscribe(
      () => {
        this.loadEquipments(); 
      },
      error => console.error('Error deleting equipment:', error)
    );
  }
}