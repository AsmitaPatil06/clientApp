import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  data: any;
  data1: any;
  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getData();


  }

  getData() {

    this.auth.clientGet().subscribe((res: any) => {
      this.data = res.records;
      this.data1 = JSON.stringify(this.data);
      console.log("Records", this.data1.assignedMembers)


    })
  }


}
