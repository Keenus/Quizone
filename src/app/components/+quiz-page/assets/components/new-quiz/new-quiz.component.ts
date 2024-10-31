import { Component } from '@angular/core';
import {QuizService} from "../../../../quiz-service/quiz.service";
import {AddQuestionComponent} from "../../../../add-question/add-question.component";
import {QuizComponent} from "../../../../quiz/quiz.component";
import {SolidIconsModule} from "@dimaslz/ng-heroicons";

@Component({
  selector: 'app-new-quiz',
  standalone: true,
    imports: [
        AddQuestionComponent,
        QuizComponent,
        SolidIconsModule
    ],
  templateUrl: './new-quiz.component.html',
  styleUrl: './new-quiz.component.scss'
})
export class NewQuizComponent {
  quizStarted = false;
  questionCount = 0;

  constructor(private quizService: QuizService) {}

  onQuestionAdded() {
    this.questionCount = this.quizService.getQuestions().length;
  }

  startQuiz() {
    this.quizStarted = true;
  }

  onQuizEnded() {
    this.quizStarted = false;
  }
}
