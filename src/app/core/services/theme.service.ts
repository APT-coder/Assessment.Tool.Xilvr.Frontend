import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleTheme(isDark: boolean) {
    this.isDarkModeSubject.next(isDark);
    this.updateTheme(isDark);
    this.updateCSSVariables(isDark);
  }

  private updateCSSVariables(isDark: boolean) {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }

  private updateTheme(isDark: boolean) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    themeLink.href = isDark
      ? 'assets/themes/ng-zorro-antd.dark.css'
      : 'assets/themes/ng-zorro-antd.css';
  }
}
