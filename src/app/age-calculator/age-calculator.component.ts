import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.scss',
})
export class AgeCalculatorComponent {
  birthdate: any;
  age: any;
  calculateAge() {
    const today = new Date();
    const birthDate = new Date(this.birthdate);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // If birthdate hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageYears--;
    }

    let ageMonths = today.getMonth() - birthDate.getMonth();
    if (ageMonths < 0 || (ageMonths === 0 && dayDiff < 0)) {
      ageMonths += 12;
    }

    let ageDays = today.getDate() - birthDate.getDate();
    if (ageDays < 0) {
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += tempDate.getDate();
    }

    this.age = {
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };
  }
}
