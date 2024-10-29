import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Question, QuizService} from "../quiz-service/quiz.service";

@Component({
  selector: 'quiz-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Output() quizEnded = new EventEmitter<void>();

  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswer = '';
  userAnswers: string[] = [];
  quizCompleted = false;
  score = 0;

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.getQuestions();
    this.userAnswers = new Array(this.questions.length).fill('');
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.selectedAnswer) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
      this.currentQuestionIndex++;
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex];
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex];
    }
  }

  finishQuiz() {
    if (this.selectedAnswer) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
      this.score = this.calculateScore();
      this.quizCompleted = true;
    }
  }

  calculateScore(): number {
    return this.userAnswers.reduce((score, answer, index) => {
      return score + (answer === this.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  }

  restartQuiz() {
    this.quizService.clearQuestions();
    this.quizEnded.emit();
  }
}
