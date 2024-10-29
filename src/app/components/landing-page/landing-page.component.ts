import { Component } from '@angular/core';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {QuizPageComponent} from "../+quiz-page/quiz-page.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgHeroiconsModule, QuizPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}
