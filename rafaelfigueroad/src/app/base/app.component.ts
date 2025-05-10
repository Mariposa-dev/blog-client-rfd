import { Component, effect, signal, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('navbar') navbarRef!: ElementRef;

  constructor(private router: Router){}

  openSidebar() {
    this.navbarRef.nativeElement.classList.add('show');
    console.log("Sidebar opened");
  }

  closeSidebar() {
    this.navbarRef.nativeElement.classList.remove('show');
  }

  ngOnInit(): void {
    
  }

  goToProfile(){
    this.router.navigate(['/viewProfile']);
  }

  goToHomePage(){
    this.router.navigate(['/homePage'])
  }

  goToPublication(){
    this.router.navigate(['/publication'])
  }

}
