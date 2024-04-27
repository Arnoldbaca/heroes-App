import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/heroes/interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }

  public goHero(id: string): void {
    console.log('le di clic');
    this.router.navigateByUrl('/heroes/edit' + id);
  }
}
