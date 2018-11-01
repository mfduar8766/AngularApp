import { Injectable } from '@angular/core';
import { Tile } from './Models/Interfaces/Tile.interface'; 

@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {

  tiles: Tile[] = [
    {
      id: 1,
      text: 'One',
      columns: 2,
      rows: 2,
      class: 'one-tile'
    },
    {
      id: 2,
      text: 'Two',
      columns: 1,
      rows: 1,
      class: 'two-tile',
    },
    {
      id: 3,
      text: 'Three',
      columns: 1,
      rows: 2,
      class: 'three-tile',
    },
    {
      id: 4,
      text: 'Four',
      columns: 1,
      rows: 2,
      class: 'four-tile',
    },
    {
      id: 5,
      text: 'Five',
      columns: 2,
      rows: 1,
      class: 'five-tile',
    },
    {
      id: 6,
      text: 'Six',
      columns: 1,
      rows: 1,
      class: 'six-tile',
    },
  ];

  constructor() { }
}
