import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/model/global.model'; 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  newUser: any = {};

  constructor(private userService: UserService) {}

  createUser(): void {
    this.newUser.role = Role.USER; 
    this.userService.creerUtilisateur(this.newUser).subscribe(
      () => {
        this.newUser = {};
      },
    
    );console.log(this.newUser)
  }
}
