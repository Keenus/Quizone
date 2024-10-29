import { Injectable } from '@angular/core';

export interface Question {
  text: string;
  options: { id: number; value: string }[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [];

  addQuestion(question: Question) {
    this.questions.push(question);
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  clearQuestions() {
    this.questions = [];
  }
}
