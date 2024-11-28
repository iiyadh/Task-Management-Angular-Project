import { Component } from '@angular/core';
import {SignComponent} from './comp/auth/sign/sign.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-management-system';
}
