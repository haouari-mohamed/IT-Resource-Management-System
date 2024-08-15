import { Component, OnInit } from '@angular/core';
import { PanneService } from 'src/app/services/panne.service';
import { Panne } from 'src/app/model/global.model';

@Component({
  selector: 'app-breakdown-list',
  templateUrl: './breakdown-list.component.html',
  styleUrls: ['./breakdown-list.component.css']
})
export class BreakdownListComponent implements OnInit {

  breakdowns: Panne[] = [];

  constructor(private panneService: PanneService) {}

  ngOnInit(): void {
    this.loadBreakdowns();
  }

  loadBreakdowns(): void {
    this.panneService.getAllPannes().subscribe(
      data => this.breakdowns = data,
      error => console.error('Error fetching breakdowns:', error)
    );
  }

  deletePanne(id: number): void {
    this.panneService.deletePanne(id).subscribe(
      () => this.loadBreakdowns(),
      error => console.error('Error deleting breakdown:', error)
    );
  }
}
