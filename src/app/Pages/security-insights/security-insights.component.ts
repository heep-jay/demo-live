import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-insights',
  templateUrl: './security-insights.component.html',
  styleUrls: ['./security-insights.component.css'],
})
export class SecurityInsightsComponent implements OnInit {
  selectedInsight: any = null;

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.canonicalUrl();
    window.scrollTo(0, 0);
    const pageTitle = 'Halogen | Security Insights';
    this.setPageTitle(pageTitle);
  }

  download(url: any) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  preview(insight: any) {
    this.selectedInsight = insight;
    // Use Bootstrap modal programmatically
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('previewModal')
    );
    modal.show();
  }

  canonicalUrl(): string {
    const currentRoute = this.router.url;
    return `https://halogen-group.com${currentRoute}`;
  }

  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  securityInsightsData = [
    {
      title: 'Rethinking Security in Nigeria',
      image:
        'https://res.cloudinary.com/dnjccz6dn/image/upload/v1756301432/Screenshot_2025_08_27_142931_1af47033c8.png?updated_at=2025-08-27T13:30:32.896Z',
      fileUrl:
        'https://res.cloudinary.com/dnjccz6dn/image/upload/v1756300991/Halogen_Security_Insights_Roundtable_1_1_compressed_350f2607bd.pdf',
    },
    {
      title: 'Cross-Sectoral Collaborative Security',
      image:
        'https://res.cloudinary.com/dnjccz6dn/image/upload/v1764241042/Roundtable_Cover_page_b358ac5024.jpg',
      fileUrl:
        'https://res.cloudinary.com/dnjccz6dn/image/upload/v1764240958/Security_Roundtable_Report_Sept_2025_compressed_531ee0cb32.pdf',
    },
  ];
}
