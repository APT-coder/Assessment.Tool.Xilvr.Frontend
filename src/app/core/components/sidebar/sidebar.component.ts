import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    {
      icon: 'fa-solid fa-house'
    },
    {
      icon: 'fa-solid fa-file-lines'
    },
    {
      icon: 'fa-solid fa-user-tag'
    }
  ]

  isDarkMode = false;
  isLoading = false;
  isProfileMenuOpen = false;
  isAnimating = false;
  themeIcon!: string;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
      this.themeIcon = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"
    });
  }

  toggleTheme() {
    this.isLoading = true;
    setTimeout(() => {
      this.themeService.toggleTheme(!this.isDarkMode);
      this.isLoading = false;
    }, 2000);
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu() {
    this.isAnimating = true;
    setTimeout(() => {
      this.isProfileMenuOpen = false;
      this.isAnimating = false;
    }, 300);
  }
}
