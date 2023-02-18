import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuPopover = false;

  ngAfterViewInit() {}
  toggleMenu(event: any) {
    event.preventDefault();
    if (this.menuPopover) {
      this.menuPopover = false;
    } else {
      this.menuPopover = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
