import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataHolderComponent } from './data-holder/data-holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataHolderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'harry-potter-api';
}
