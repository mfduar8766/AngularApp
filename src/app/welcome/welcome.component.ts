import { Component, OnInit } from '@angular/core';
import { Tile } from '../Interfaces/Tile.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: 'One',
      columns: 2,
      rows: 2,
      class: 'one-tile'
    },
    {
      text: 'Two',
      columns: 1,
      rows: 1,
      class: 'two-tile',
    },
    {
      text: 'Three',
      columns: 1,
      rows: 2,
      class: 'three-tile',
    },
    {
      text: 'Four',
      columns: 1,
      rows: 2,
      class: 'four-tile',
    },
    {
      text: 'Five',
      columns: 2,
      rows: 1,
      class: 'five-tile',
    },
    {
      text: 'Six',
      columns: 1,
      rows: 1,
      class: 'six-tile',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
