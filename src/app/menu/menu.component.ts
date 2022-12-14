import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe((dishes)=>this.dishes=dishes);

    //convert that .then to .subscribe because we are using observable


    
    //This is how your component can hold on the promise when retrieve it now

  }
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

}

//Dealing with the promises to getDishes