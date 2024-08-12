import { Component, OnInit } from '@angular/core';
import { EquipementService } from 'src/app/services/equipement.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  equipments: any[] = [];

  constructor(
    private utilisateurService: UserService,
    private equipementService: EquipementService
  ) { }

  ngOnInit() {
    this.loadUsers();
    this.loadEquipments();
  }

  loadUsers() {
    this.utilisateurService.getAllUtilisateurs().subscribe(
      (data) => this.users = data,
      (error) => console.error('Error loading users', error)
    );
  }

  loadEquipments() {
    this.equipementService.getAllEquipements().subscribe(
      (data) => this.equipments = data,
      (error) => console.error('Error loading equipment', error)
    );
  }
}