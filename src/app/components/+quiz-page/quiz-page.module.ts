import {Routes} from "@angular/router";
import {QuizPageComponent} from "./quiz-page.component";
import {NewQuizComponent} from "./assets/components/new-quiz/new-quiz.component";

export const QuizPageModule: Routes = [
  {
    path: '',
    component: QuizPageComponent
  },
  {
    path: 'new',
    component: NewQuizComponent
  }
  ];
