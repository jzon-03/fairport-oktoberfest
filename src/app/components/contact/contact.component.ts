import { Component } from '@angular/core';

type ContactChannel = {
  title: string;
  detail: string;
  actionLabel: string;
  actionHref: string;
};

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected readonly channels: ContactChannel[] = [
    {
      title: 'General Questions',
      detail: 'Questions about schedule, admissions, and festival operations.',
      actionLabel: 'Email Organizers',
      actionHref: 'mailto:info@fairportoktoberfest.thepracticalapps.com',
    },
    {
      title: 'Volunteer Interest',
      detail: 'Get connected with volunteer coordination and shift opportunities.',
      actionLabel: 'Volunteer Inquiry',
      actionHref: 'mailto:volunteer@fairportoktoberfest.thepracticalapps.com',
    },
    {
      title: 'Vendor & Sponsor Requests',
      detail: 'Booth, partnership, and community support inquiries.',
      actionLabel: 'Partnership Inquiry',
      actionHref: 'mailto:partners@fairportoktoberfest.thepracticalapps.com',
    },
  ];

}
