import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MainTitleComponent } from "../../shared/components/main-title/main-title.component";

interface EventItem{
  title: string;
  type: string;
  image: string;
  link:string;
};
interface TabItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-works',
  imports: [NgStyle, NgClass, MainTitleComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
tabs!:TabItem[];
items!:EventItem[];
activeTab = 'all';
animate = false;

ngOnInit(): void {
  this.intalization();
  requestAnimationFrame(() => {
    this.animate = true;
  });
}

intalization(): void {

  this.tabs = [
    { label: 'All', value: 'all' },
    { label: 'Angular', value: 'angular' },
    { label: 'JS', value: 'js' },
    { label: 'MVC', value: 'ASP .Net Core MVC' },
  ];

  this.items = [
    { title: 'Trendify E-Commerce', type: 'angular', image: '/images/Trendify.png', link: 'https://trendify-e-commerce-blond.vercel.app/' },
    { title: 'Gym Management System', type: 'ASP .Net Core MVC', image: '/images/GymManagementSystem.png', link: 'http://elbarbary01-gymmanagement.runasp.net/' },
    { title: 'My Portfolio', type: 'angular', image: '/images/Portfolio.png', link: 'https://my-portfolio-gamma-topaz-46.vercel.app/' },
    { title: 'Book_Mark Crud System', type: 'js', image: '/images/Bookmarker-CRUD-System.png', link: 'https://mohamed-el-barbary.github.io/Bookmarker-CRUD-System/' },
    { title: 'ToDo App', type: 'js', image: '/images/To-Do-List-App.png', link: 'https://mohamed-el-barbary.github.io/To-Do-List-App/' },
    { title: 'Weather App', type: 'js', image: '/images/Weather-App.png', link: 'https://mohamed-el-barbary.github.io/Weather-App/' },
    { title: 'Game Over', type: 'js', image: '', link: 'https://via.placeholder.com/600x400/99cc66/000000?text=Sushi+Parlour' },
    { title: 'Employee_Management Crud System', type: 'js', image: '/images/Employee-Management-CRUD-System.png', link: 'https://mohamed-el-barbary.github.io/Employee-Management-CRUD-System/' },
    { title: 'Qoute Generator', type: 'js', image: '/images/Qoute Generator.png', link: 'https://mohamed-el-barbary.github.io/Quote-Generator/' },
    { title: 'Daniels', type: 'js', image: '/images/Daniels.png', link: 'https://mohamed-el-barbary.github.io/Daniels/' },
    { title: 'Simon', type: 'js', image: '/images/Simon.png', link: 'https://mohamed-el-barbary.github.io/Simon/' },
  ];

}




get filteredItems() {
  if (!this.activeTab || this.activeTab === 'all') {
    return this.items;
  }
  return this.items.filter((item) => item.type === this.activeTab);
}

  filterItems(type: string) {
    if (type === this.activeTab) return; // ✅ لو نفس التبويب، ما نعملش حاجة
  
    this.animate = false; // ✅ نوقف الأنيميشن مؤقتًا
    this.activeTab = ''; // نفضي التبويب علشان نمنع عرض العناصر مؤقتًا
  
    // ✅ بعد انتهاء الدورة القادمة من العرض (Animation Frame)
    requestAnimationFrame(() => {
      this.activeTab = type;
  
      // ✅ تأخير صغير ليفعل transition
      setTimeout(() => {
        this.animate = true;
      }, 20); // أقل من 1 فريم
    });
  }
}
