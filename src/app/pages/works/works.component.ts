import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MainTitleComponent } from "../../shared/components/main-title/main-title.component";

interface EventItem {
  title: string;
  type: string;
  image: string;
  link: string;
}
interface TabItem {
  label: string;
  value: string;
  icon: string;
  children?: TabItem[];
}

@Component({
  selector: 'app-works',
  imports: [NgStyle, NgClass, MainTitleComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  tabs!: TabItem[];
  items!: EventItem[];
  activeTab = 'all'; // main group: all | frontend | backend
  activeSub = 'all'; // sub tab inside the group
  animate = false;

  ngOnInit(): void {
    this.intalization();
    requestAnimationFrame(() => (this.animate = true));
  }

  intalization(): void {
    this.tabs = [
      { label: 'All', value: 'all', icon: 'fa-solid fa-layer-group' },
      {
        label: 'Front-End',
        value: 'frontend',
        icon: 'fa-solid fa-code',
        children: [
          { label: 'Angular', value: 'angular', icon: 'fa-brands fa-angular' },
          { label: 'JavaScript', value: 'js', icon: 'fa-brands fa-js' },
        ],
      },
      {
        label: 'Back-End',
        value: 'backend',
        icon: 'fa-solid fa-server',
        children: [
          {
            label: 'MVC',
            value: 'ASP .Net Core MVC',
            icon: 'fa-solid fa-table-columns',
          },
          {
            label: 'API',
            value: 'ASP .Net Core API',
            icon: 'fa-solid fa-plug',
          },
        ],
      },
    ];

    this.items = [
      {
        title: 'Trendify E-Commerce',
        type: 'angular',
        image: '/images/Trendify.png',
        link: 'https://trendify-e-commerce-blond.vercel.app/',
      },
      {
        title: 'Gym Management System',
        type: 'ASP .Net Core MVC',
        image: '/images/GymManagementSystem.png',
        link: 'http://elbarbary01-gymmanagement.runasp.net/',
      },
      {
        title: 'Job Management System',
        type: 'ASP .Net Core API',
        image: '/images/Job-Management.png',
        link: 'https://github.com/Mohamed-El-Barbary/JobApplication-CleanArchitecture',
      },
      {
        title: 'Shifaa - Telemedicine Platform',
        type: 'ASP .Net Core API',
        image: '/images/Telemedecine.png',
        link: 'https://github.com/Mohamed-El-Barbary/MediCare.API',
      },
      {
        title: 'E-Commerce Website',
        type: 'ASP .Net Core API',
        image: '/images/E-commerce.png',
        link: 'https://github.com/Mohamed-El-Barbary/E-CommerceAPI',
      },
      {
        title: 'My Portfolio',
        type: 'angular',
        image: '/images/Portfolio.png',
        link: 'https://my-portfolio-gamma-topaz-46.vercel.app/',
      },
      {
        title: 'Book_Mark Crud System',
        type: 'js',
        image: '/images/Bookmarker-CRUD-System.png',
        link: 'https://mohamed-el-barbary.github.io/Bookmarker-CRUD-System/',
      },
      {
        title: 'ToDo App',
        type: 'js',
        image: '/images/To-Do-List-App.png',
        link: 'https://mohamed-el-barbary.github.io/To-Do-List-App/',
      },
      {
        title: 'Weather App',
        type: 'js',
        image: '/images/Weather-App.png',
        link: 'https://mohamed-el-barbary.github.io/Weather-App/',
      },
      {
        title: 'Game Over',
        type: 'js',
        image: '',
        link: 'https://via.placeholder.com/600x400/99cc66/000000?text=Sushi+Parlour',
      },
      {
        title: 'Employee_Management Crud System',
        type: 'js',
        image: '/images/Employee-Management-CRUD-System.png',
        link: 'https://mohamed-el-barbary.github.io/Employee-Management-CRUD-System/',
      },
      {
        title: 'Qoute Generator',
        type: 'js',
        image: '/images/Qoute Generator.png',
        link: 'https://mohamed-el-barbary.github.io/Quote-Generator/',
      },
      {
        title: 'Daniels',
        type: 'js',
        image: '/images/Daniels.png',
        link: 'https://mohamed-el-barbary.github.io/Daniels/',
      },
      {
        title: 'Simon',
        type: 'js',
        image: '/images/Simon.png',
        link: 'https://mohamed-el-barbary.github.io/Simon/',
      },
    ];
  }

  get activeGroup(): TabItem | undefined {
    return this.tabs?.find((t) => t.value === this.activeTab);
  }

  get subTabs(): TabItem[] {
    return this.activeGroup?.children ?? [];
  }

  get filteredItems(): EventItem[] {
    if (this.activeTab === 'all') return this.items;
    const types =
      this.activeSub !== 'all'
        ? [this.activeSub]
        : this.subTabs.map((s) => s.value);
    return this.items.filter((item) => types.includes(item.type));
  }

  countFor(tab: TabItem): number {
    if (tab.value === 'all') return this.items.length;
    const types = tab.children ? tab.children.map((c) => c.value) : [tab.value];
    return this.items.filter((i) => types.includes(i.type)).length;
  }

  labelFor(type: string): string {
    for (const group of this.tabs) {
      const sub = group.children?.find((c) => c.value === type);
      if (sub) return sub.label;
    }
    return type;
  }

  filterItems(group: string): void {
    if (group === this.activeTab) return;
    this.transition(() => {
      this.activeTab = group;
      this.activeSub = 'all';
    });
  }

  filterSub(sub: string): void {
    if (sub === this.activeSub) return;
    this.transition(() => (this.activeSub = sub));
  }

  private transition(apply: () => void): void {
    this.animate = false;
    requestAnimationFrame(() => {
      apply();
      setTimeout(() => (this.animate = true), 20);
    });
  }
}
