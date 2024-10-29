import { Component } from '@angular/core';
import {SolidIconsModule} from "@dimaslz/ng-heroicons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [
    SolidIconsModule,
    RouterLink
  ],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent {

}
