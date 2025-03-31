import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { UserDetails } from '../../models/user-details.model';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-app-layout',
  imports: [CommonModule, RouterOutlet, NzSpinModule, SidebarComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  loading = false;
  userDetails!: UserDetails;

  ngOnInit(){
    this.userDetails = {
      firstName: "Aswin",
      lastName: "P T",
      email: "aswingmail.com",
      phoneNumber: "+91 98765 43210",
      batch: ["ILP Batch 3"],
      designation: "Trainer",
      profileImageUrl: "https://i.pravatar.cc/75"
    }
  }
}
