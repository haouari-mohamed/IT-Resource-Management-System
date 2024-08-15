import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Get all sidebar menu items
const allSideMenu = document.querySelectorAll<HTMLAnchorElement>('#sidebar .side-menu.top li a');

// Add event listeners to each menu item
allSideMenu.forEach(item => {
    const li = item.parentElement as HTMLLIElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            (i.parentElement as HTMLLIElement).classList.remove('active');
        });
        li.classList.add('active');
    });
});

// Toggle sidebar visibility
const menuBar = document.querySelector<HTMLDivElement>('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar') as HTMLDivElement;

menuBar?.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Handle search form visibility
const searchButton = document.querySelector<HTMLButtonElement>('#content nav form .form-input button');
const searchButtonIcon = document.querySelector<HTMLSpanElement>('#content nav form .form-input button .bx');
const searchForm = document.querySelector<HTMLFormElement>('#content nav form');

searchButton?.addEventListener('click', function (e: MouseEvent) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList.contains('show')) {
            searchButtonIcon?.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        }
    }
});

// Initial setup based on window width
if (window.innerWidth < 768) {
    sidebar?.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon?.classList.replace('bx-x', 'bx-search');
    searchForm?.classList.remove('show');
}

// Handle window resize events
window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        searchForm?.classList.remove('show');
    }
});

// Switch dark mode
const switchMode = document.getElementById('switch-mode') as HTMLInputElement;

switchMode?.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
