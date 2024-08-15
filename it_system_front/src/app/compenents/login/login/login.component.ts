import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role);
        console.log(response);
  
        switch(response.role) {
          case 'TECHNICIAN':
            this.router.navigate(['/tech']);
            console.log("Navigating to technician");
            break;
          case 'USER':
            this.router.navigate(['/use']);
         
            console.log("Navigating to user");
            break;
          case 'ADMIN':
          /*   this.router.navigate(['/dashboard']); */
            /* this.router.navigate(['/listequip']) */
           /*  this.router.navigate(['/createequip']), */
           /* this.router.navigate(['/ticketlist']) */
           /* this.router.navigate(['/panne']) */
          /*  this.router.navigate(['/pannelist']) */
       /*    this.router.navigate(['/userlist']) */
       this.router.navigate(['/ticketlist'])
            console.log("Navigating to admin dashboard");
            break;
          default:
            console.log("Unknown role:", response.role);
        }
      },
    );
  }}
