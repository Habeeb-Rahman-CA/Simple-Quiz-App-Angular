import { Component } from '@angular/core';
import { QuizInterface } from '../../model/quiz-interface';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  questions: QuizInterface[] = [
    {
      "question": "What is Angular?",
      "options": ["A JavaScript Framework", "A Database", "A Programming Language"],
      "correct": 0
    },
    {
      "question": "Which command is used to create a new Angular project?",
      "options": ["ng new", "ng generate", "ng build"],
      "correct": 0
    },
    {
      "question": "Which file contains the root component in an Angular app?",
      "options": ["main.ts", "index.html", "app.component.ts"],
      "correct": 2
    },
    {
      "question": "What is used to bind data from the component to the view in Angular?",
      "options": ["Two-way binding", "Dependency Injection", "Services"],
      "correct": 0
    },
    {
      "question": "What is a decorator in Angular?",
      "options": [
        "A special syntax to define modules and components",
        "A design pattern for services",
        "A CSS framework"
      ],
      "correct": 0
    },
    {
      "question": "What does Angular CLI stand for?",
      "options": ["Command Line Interface", "Code Line Integrator", "Component Layout Infrastructure"],
      "correct": 0
    },
    {
      "question": "Which directive is used for conditionally displaying content?",
      "options": ["*ngFor", "*ngIf", "*ngSwitch"],
      "correct": 1
    },
    {
      "question": "What is the purpose of the package.json file in an Angular project?",
      "options": [
        "To store metadata and dependencies of the project",
        "To configure Angular routes",
        "To store component styles"
      ],
      "correct": 0
    },
    {
      "question": "Which lifecycle hook is used to handle initialization logic?",
      "options": ["ngOnInit", "ngOnDestroy", "ngAfterViewInit"],
      "correct": 0
    },
    {
      "question": "What is a service in Angular used for?",
      "options": [
        "To define reusable data and logic",
        "To style components",
        "To manage Angular modules"
      ],
      "correct": 0
    }
  ]

  currentQuestionIndex: number = 0
  score: number = 0
  selectedAnswer: number | null = null
  timer: number = 30
  showResult: boolean = false
  interval: any

  submitAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correct) {
      this.score++
    }
    this.currentQuestionIndex++
    if (this.currentQuestionIndex < this.questions.length) {
      this.startTimer()
    } else {
      this.showResult = true
    }
  }


  getCardClasses(index: number): string {
    return index === this.selectedAnswer
      ? 'bg-blue-500 text-white border-blue-700'
      : 'bg-white text-black border-gray-300';
  }


  startTimer() {
    this.timer = 30
    this.interval = setInterval(() => {
      this.timer--
      if (this.timer === 0) {
        this.submitAnswer()
      }
    }, 1000)
  }

  restartQuiz() {
    this.currentQuestionIndex = 0
    this.score = 0
    this.showResult = false
    this.startTimer()
  }

}
