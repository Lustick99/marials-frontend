import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { fadeSlide } from '../../../shared/animations';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [fadeSlide]
})
export class ContactFormComponent {
  form: ReturnType<FormBuilder['group']>;
  submitSuccess: boolean | null = null;
  submitMessage: string = '';
  isLoading = false;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log('Form Data:', this.form.value);
  //     // Remplacer par l'envoi à l'API ou au service backend
  //     alert('Message envoyé avec succès !');
  //     this.form.reset();
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }
  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.submitSuccess = null;

    // Simulation d'envoi HTTP
    setTimeout(() => {
      // Remplace cette partie par ton service réel
      const fakeSuccess = true; // ou false selon le test

      this.isLoading = false;
      this.submitSuccess = fakeSuccess;
      this.submitMessage = fakeSuccess
        ? 'Votre message a été envoyé avec succès !'
        : 'Une erreur est survenue. Veuillez réessayer.';

      if (fakeSuccess) {
        this.form.reset();
        this.form.markAsPristine();
      }

      // Cache le message après 5 secondes
      setTimeout(() => {
        this.submitSuccess = null;
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }

}
