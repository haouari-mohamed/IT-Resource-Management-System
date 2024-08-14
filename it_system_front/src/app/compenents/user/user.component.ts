// src/app/components/user/user.component.ts

import { Component, OnInit } from '@angular/core';
import { TicketDeSupport } from 'src/app/model/global.model';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tickets: TicketDeSupport[] = [];
  newTicket: { description: string } = { description: '' };
  selectedTicket?: TicketDeSupport;

  constructor(private ticketService: TicketDeSupportService) { }

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getAllTicketsDeSupport().subscribe(
      (data) => this.tickets = data,
    
    )
  }

  createTicket() {
    this.ticketService.creerTicketDeSupport(this.newTicket).subscribe(
      () => {
        console.log('Ticket created successfully');
        this.loadTickets();
        this.newTicket = { description: '' };
        console.log("ticket create with succes")
      },
      (error) => console.error('Error creating ticket', error)
    );
  }

  viewTicket(id: number) {
    this.ticketService.getTicketDeSupportById(id).subscribe(
      (data) => this.selectedTicket = data,
      (error) => console.error('Error fetching ticket details', error)
    );
  }

  closeModal() {
    this.selectedTicket = undefined;
  }
}
