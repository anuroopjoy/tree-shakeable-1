import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent implements OnInit {
  constructor(public state: StateService) {}
  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.state.setName('Robert');
    });
  }
}
