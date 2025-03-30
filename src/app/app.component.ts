import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xilvr-app';

  isDarkMode = false;
  isLoading = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.isLoading = true;
    setTimeout(() => {
      this.themeService.toggleTheme(!this.isDarkMode);
      this.isLoading = false;
    }, 2000);
  }
}
