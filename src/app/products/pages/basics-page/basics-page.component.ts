import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = "jesus"
  public nameUpper: string = "JESUS"
  public fullName: string = "jEsUs MeNGibAr"

  public customDate: Date = new Date();
}
