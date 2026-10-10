import { Component, OnInit } from '@angular/core';
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

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  type: 'Certificate' | 'Training';
  icon: string;
  description?: string;
  img?: string;
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
  certificates!: CertificateItem[];

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
          'Tanta University is a public<br>university located in Tanta, Egypt.',
        label: 'Certificate',
        residence: 'Egypt',
        icon: 'fa-solid fa-chevron-right',
        isPresent: 'false',
        img: '/images/University_Certificate.jpg',
      },
    ];

    this.experienceEvents = [
      {
        date: 'September 2026',
        education: 'iCareer (Software Engineering Intern)',
        description:
          'Completed a one-month Software Engineering internship at iCareer, gaining practical experience in Agile methodologies, requirements analysis, project management, and .NET development.',
        label: 'Certificate',
        residence: 'Egypt',
        icon: 'fa-solid fa-chevron-right',
        isPresent: 'false',
        img: '/images/iCareer_Certificate.png',
      },
    ];

    this.certificates = [
      {
        title: 'Front-End Development Diploma',
        issuer: 'Route Academy',
        date: 'Apr 2025',
        type: 'Training',
        icon: 'fa-brands fa-angular',
        description:
          'Intensive program covering Angular, TypeScript and real-world projects.',
        img: '/images/Mohamed Mahmoud El_Barbary_page-0001.jpg',
      },
      {
        title: 'ASP.NET Core Back-End Diploma',
        issuer: 'Route Academy',
        date: 'Dec 2025',
        type: 'Training',
        icon: 'fa-solid fa-server',
        description:
          'Hands-on .NET training: ASP.NET Core, EF Core and building APIs.',
        img: '/images/Backend_Certificate.jpg',
      }
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
