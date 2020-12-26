import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class StateService {
  private username = 'Bob';
  constructor() {}

  public getName(): string {
    return this.username;
  }
  public setName(val: string) {
    this.username = val;
  }
}
