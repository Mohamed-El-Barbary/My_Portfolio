import {
  Component,
  OnInit,
} from '@angular/core';
import { MainTitleComponent } from '../../shared/components/main-title/main-title.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { NgClass } from '@angular/common';
import { ProgressBar } from 'primeng/progressbar';

interface EventItem {
  status?: string;
  date?: string;
  education?: string;
  description?: string;
  label?: string;
  image?: string;
  residence?: string;
  icon?: string;
  img?: string;
  isPresent?: string;
}

// 🆕 NEW: shape of each column (Education / Experience)
interface TimelineSection {
  title: string;
  icon: string;
  items: EventItem[];
}

interface SkillItem {
  title: string;
  percent: number;
}

@Component({
  selector: 'app-resume',
  imports: [
    MainTitleComponent,
    ScrollPanelModule,
    CardModule,
    ButtonModule,
    Dialog,
    NgClass,
    ProgressBar,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent implements OnInit {
  educationEvents!: EventItem[];
  experienceEvents!: EventItem[];
  timelineSections!: TimelineSection[];

  visible: boolean = false;
  popupImg: string = '';
  skills!: SkillItem[];
  features!: string[];
  frontEndSkills!: SkillItem[];
  backEndSkills!: SkillItem[];
  devOpsSkills!: SkillItem[];
  currentImage: string = '';

  ngOnInit(): void {
    this.intalization();
  }

  intalization(): void {
    this.educationEvents = [
      {
        date: '2021 - 2026',
        education: 'Tanta University',
        description:
          'Tanta University is a public university located in Tanta, Egypt.',
        label: 'Certificate',
        residence: 'Egypt',
        icon: 'fa-solid fa-chevron-right',
        isPresent: 'false',
        img: '/images/University_Certificate.jpg',
      },
    ];

    this.experienceEvents = [
      {
        date: 'May 2025 - Dec 2025',
        education: 'Route (Back-End Intern)',
        description:
          'Interning at Route, focusing on .NET for Back-End development and improving server-side application skills.',
        label: 'Certificate',
        residence: 'Egypt',
        icon: 'fa-solid fa-chevron-right',
        isPresent: 'false',
        img: '/images/Backend_Certificate.jpg',
      },
      {
        date: 'Sep 2024 - Apr 2025',
        education: 'Route (Front-End Intern)',
        description:
          'Completed an intensive Front-End Diploma at Route with real-world Angular projects and hands-on experience.',
        label: 'Certificate',
        residence: 'Egypt',
        icon: 'fa-solid fa-chevron-right',
        isPresent: 'false',
        img: '/images/Mohamed Mahmoud El_Barbary_page-0001.jpg',
      },
    ];

    this.timelineSections = [
      {
        title: 'Education',
        icon: 'fa-solid fa-graduation-cap',
        items: this.educationEvents,
      },
      {
        title: 'Experience',
        icon: 'fa-solid fa-briefcase',
        items: this.experienceEvents,
      },
    ];

    this.skills = [
      { title: 'HTML / CSS', percent: 95 },
      { title: 'Angular / TypeScript', percent: 80 },
      { title: 'JavaScript', percent: 85 },
      { title: 'C# / SQL', percent: 80 },
    ];

    this.features = [
      'Data Structures & Algorithms',
      'Database Design & SQL Concepts',
      'Object-Oriented Programming (OOP)',
      'Computer Networks Basics',
      'AI Fundamentals',
      'Virtualization Basics',
      'Responsive and mobile-ready',
    ];

    this.frontEndSkills = [
      { title: 'Angular', percent: 80 },
      { title: 'TypeScript', percent: 80 },
      { title: 'JavaScript (ES6+)', percent: 85 },
      { title: 'Bootstrap', percent: 80 },
      { title: 'Tailwind CSS', percent: 90 },
      { title: 'Figma', percent: 50 },
    ];

    this.backEndSkills = [
      { title: 'Database Design', percent: 85 },
      { title: 'SQL Server', percent: 80 },
      { title: 'C#', percent: 90 },
      { title: 'OOP', percent: 95 },
      { title: 'Advanced C#', percent: 85 },
      { title: 'LINQ', percent: 80 },
      { title: 'Entity Framework (EF Core)', percent: 90 },
      { title: 'ASP.NET Core', percent: 85 },
    ];

    this.devOpsSkills = [
      { title: 'Git & GitHub', percent: 85 },
      { title: 'Linux (Ubuntu)', percent: 70 },
    ];
  }

  showDialog(event: any) {
    this.visible = true;
    this.currentImage = event;
  }

  getCircumference(radius: number) {
    return 2 * Math.PI * radius;
  }

  getOffset(radius: number, percent: number) {
    return this.getCircumference(radius) * (1 - percent / 100);
  }
}
