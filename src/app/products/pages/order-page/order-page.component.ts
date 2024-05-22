import { Component } from '@angular/core';
import { Color, Hero } from '../../Interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styles: ``,
})
export class OrderPageComponent {

  public isUpperCase: boolean = false

  public orderBy: keyof Hero | null = null



  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    }
  ]

  constructor() { }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }


  changeOrder(value: keyof Hero) {
    this.orderBy = value
  }

}
