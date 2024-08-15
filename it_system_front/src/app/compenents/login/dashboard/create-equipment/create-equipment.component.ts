
import { Component } from '@angular/core';
import { Equipement, EtatEquipement } from 'src/app/model/global.model';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent {
  newEquipment: Partial<Equipement> = {
    etat: EtatEquipement.FONCTIONNEL,
    dateAcquisition: new Date()
  };
  etatOptions = Object.values(EtatEquipement);

  constructor(private equipementService: EquipementService) {}

  createEquipment(): void {
    this.equipementService.creerEquipement(this.newEquipment as Equipement).subscribe(
      () => {
        console.log("Equipment created successfully");
        this.resetForm();
      },
      error => console.error('Error creating equipment:', error)
    );
  }

  resetForm(): void {
    this.newEquipment = {
      etat: EtatEquipement.FONCTIONNEL,
      dateAcquisition: new Date()
    };
  }
}