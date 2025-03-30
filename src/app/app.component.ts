import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xilvr-app';

  constructor(private themeService: ThemeService){}

  private get isDarkMode(): boolean {
    return this.themeService.isDarkMode$.value;
  }

  toggleTheme() {
    const newThemeValue = !this.isDarkMode;
    this.themeService.isDarkMode$.next(newThemeValue);

    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    document.body.classList.toggle('dark-theme', newThemeValue);
    themeLink.href = newThemeValue
      ? 'assets/themes/ng-zorro-antd.dark.css'
      : 'assets/themes/ng-zorro-antd.css';
  }
}
