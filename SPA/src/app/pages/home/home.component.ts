import { Component, OnInit } from '@angular/core';
import { SecretService } from 'src/app/shared/services/secret.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sercretservice: SecretService) { }

  ngOnInit(): void {
    this.sercretservice.getValues().subscribe((secrets) => console.log(secrets))
  }

}
