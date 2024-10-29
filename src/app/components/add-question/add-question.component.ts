import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Question, QuizService} from "../quiz-service/quiz.service";

@Component({
  selector: 'add-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  @Output() questionAdded = new EventEmitter<void>();

  newQuestion: Question = {
    text: '',
    options: [{id: 0, value: ''}, {id: 1, value: ''}],
    correctAnswer: ''
  };

  constructor(private quizService: QuizService) {}

  get questions() {
    return this.quizService.getQuestions();
  }

  addOption() {
    this.newQuestion.options.push({id: this.newQuestion.options.length, value: ''});
  }

  removeOption(index: number) {
    this.newQuestion.options.splice(index, 1);
    if (this.newQuestion.correctAnswer === this.newQuestion.options[index].value) {
      this.newQuestion.correctAnswer = '';
    }
  }

  isValidQuestion(): boolean {
    return (
      this.newQuestion.text.trim() !== '' &&
      this.newQuestion.options.map(option => option.value).every((option: string) => option.trim() !== '') &&
      this.newQuestion.correctAnswer !== ''
    );
  }

  addQuestion() {
    if (this.isValidQuestion()) {
      this.quizService.addQuestion({...this.newQuestion});
      this.newQuestion = {
        text: '',
        options: [{id: 0, value: ''}, {id: 1, value: ''}],
        correctAnswer: ''
      };
      this.questionAdded.emit();
    }
  }
}
