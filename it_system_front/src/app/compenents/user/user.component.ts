import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketDeSupport } from 'src/app/model/global.model';
import { AuthService } from 'src/app/services/auth.service';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tickets: TicketDeSupport[] = [];
  newTicket: { description: string; dateCreation?: Date } = { description: '' };
  selectedTicket?: TicketDeSupport;

  constructor(private ticketService: TicketDeSupportService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadTickets();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
  loadTickets() {
    this.ticketService.getAllTicketsDeSupport().subscribe(
      (data) => this.tickets = data,
      (error) => console.error('Error loading tickets', error)
    );
  }

  createTicket() {
   
    if (this.newTicket.dateCreation) {
      this.newTicket.dateCreation = new Date(this.newTicket.dateCreation);
    }
    
    this.ticketService.creerTicketDeSupport(this.newTicket).subscribe(
      () => {
      
        this.loadTickets();
        this.newTicket = { description: '' };
        
      },
      (error) => console.error('Error de creation de tiket', error)
    );
  }

  viewTicket(id: number) {
    this.ticketService.getTicketDeSupportById(id).subscribe(
      (data) => this.selectedTicket = data,
      (error) => console.error('Error fetching ticket det', error)
    );
  }

  closeModal() {
    this.selectedTicket = undefined;
  }
}
