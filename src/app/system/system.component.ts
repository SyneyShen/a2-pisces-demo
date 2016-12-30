import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
})
export class SystemComponent implements OnInit {
  links: Array<Link> = []

  constructor(private _router: Router) {
    let homeLink = new Link('总览', '/system/home', 'home', '0', false);

    let examLink = new Link('考试', '', '', '0', false);
    examLink.addSubLink(new Link('全真考试', '/system/ieltsexam', 'subject', '0', true));
    examLink.addSubLink(new Link('词汇测验', '/system/wordsexam', 'subject', '0', false));

    let standardLink = new Link('评分标准', '/system/standard', '', '0', false);

    let profileLink = new Link('个人信息', '', '', '0', false);
    profileLink.addSubLink(new Link('账户设置', '/system/profile', 'account_box', '0', true));
    profileLink.addSubLink(new Link('历史成绩', '/system/examhistory', 'history', '0', false));
    profileLink.addSubLink(new Link('成绩排名', '/system/rank', 'trending_up', '0', true));
    profileLink.addSubLink(new Link('登出', '/system/logout', 'power_settings_new', '0', false));

    this.links.push(homeLink);
    this.links.push(examLink);
    this.links.push(standardLink);
    this.links.push(profileLink);
  }

  ngOnInit() {
  }

  gotoUrl(url: string) {
    this._router.navigate([url]);
  }

}

class Link {
  name: string;
  url: string;
  icon: string;
  badge: string;
  divider: boolean;
  subLinks: Array<Link>;

  constructor(name: string, url: string, icon: string, badge: string, divider: boolean) {
    this.name = name;
    this.url = url;
    this.icon = icon;
    this.badge = badge;
    this.divider = divider;
    this.subLinks = [];
  }

  hasSubLinks(): boolean {
    var subLinkCount = this.subLinks.length;
    if(subLinkCount > 0) {
      return true;
    }
    return false;
  }

  addSubLink(link: Link) {
    this.subLinks.push(link);
  }
}