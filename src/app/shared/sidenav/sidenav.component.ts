import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { ElementoMenu } from "src/app/core/models/elemento-menu";
import { AuthenticationService } from "src/app/features/login/authentication.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  public mobileQuery: MediaQueryList;
  
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  public elementosMenu: ElementoMenu[];

  private _mobileQueryListener: () => void;

  constructor(
    public media: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef,
    private authService: AuthenticationService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.authService.getMenuElements().subscribe(elementosMenu => {
      this.elementosMenu = elementosMenu;
    });
   }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
