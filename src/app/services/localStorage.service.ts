import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}