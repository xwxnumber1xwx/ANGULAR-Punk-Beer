import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //add favorites array on localStorage
  setStorage(key: string, array: Number[]): void {
    localStorage.setItem(key, JSON.stringify(array));
    console.log('check Storage');
    console.log(JSON.parse(localStorage.getItem('favorites')));
  }

  //get favorites from localStorage
  getStorage(key: string): number[] {
    let array: number[] = [];
    if (localStorage) {
      array = JSON.parse(localStorage.getItem(key));
      if (!array) {
        array = [];
      }
    }
    return array;
  }
}