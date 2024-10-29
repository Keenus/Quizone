import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AddQuestionComponent} from "./components/add-question/add-question.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuizService} from "./components/quiz-service/quiz.service";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AddQuestionComponent, QuizComponent, LandingPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuizService]
})
export class App {
  title = 'Quiz Game';

  toggleMobileMenu() {
    let menu = document.getElementById('mobile-menu');
    if (menu)
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
  }
    }
}

bootstrapApplication(App);
