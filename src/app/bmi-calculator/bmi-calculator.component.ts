import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrl: './bmi-calculator.component.scss',
})
export class BmiCalculatorComponent {
  weight: any;
  height: any;
  bmi: any;

  calculateBMI() {
    const heightInMeters = this.height / 100; // Convert height to meters
    this.bmi = this.weight / (heightInMeters * heightInMeters); // BMI formula
  }
}
