import { Component } from '@angular/core';
import { Router,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-domain-setting',
  templateUrl: './domain-setting.component.html',
  styleUrls: ['./domain-setting.component.scss']
})
export class DomainSettingComponent {
  constructor(public router: Router) {

  }
  ngOnInit() {
    this.router.navigate(["domainsetting/domaindetails"]);
    
  }
  menu = [{
    name: "Domain Details",
    route: "domaindetails"
  },
  {
    name: "User Management",
    route: "usermanagement"
  },
  { 
      name: "Role Management",
      route: "rolemanagement"
  }, 
  {
      name : "Pending Invites",
      route: "pendinginvites"
    }];


}
function route() {
  throw new Error('Function not implemented.');
}

