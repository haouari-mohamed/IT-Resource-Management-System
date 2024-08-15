import { Component, OnInit } from '@angular/core';
import { PanneService } from 'src/app/services/panne.service';
import { EquipementService } from 'src/app/services/equipement.service';
import { Equipement, Panne } from 'src/app/model/global.model';

@Component({
  selector: 'app-create-breakdown',
  templateUrl: './create-breakdown.component.html',
  styleUrls: ['./create-breakdown.component.css']
})
export class CreateBreakdownComponent implements OnInit {

  newBreakdown: Partial<Panne> = {
    description: '',
    datePanne: new Date(),
    resolu: false,
    equipement: undefined 
  };
  equipements: Equipement[] = [];

  constructor(
    private panneService: PanneService,
    private equipementService: EquipementService
  ) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipementService.getAllEquipements().subscribe(
      data => this.equipements = data,
      error => console.error('Error fetching equipments:', error)
    );
  }

  createBreakdown(): void {
    if (this.newBreakdown.equipement) {
      this.panneService.creerPanne(this.newBreakdown as Panne).subscribe(
        () => {
          this.newBreakdown = {
            description: '',
            datePanne: new Date(),
            resolu: false,
            equipement: undefined 
          };
        },
        error => console.error('Error creating breakdown:', error)
      );
    } else {
      console.error('Please select an equipment.');
    }
  }
}
