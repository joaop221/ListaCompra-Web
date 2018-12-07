import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input} from '@angular/core';

const loggedItens = [
  {
    text: 'Grupos',
    link: '/groups'
  },
  {
    text: 'Notificações',
    link: '/notifications',
  },
  {
    text: 'Configurações',
    link: '/settings',
  },
  {
    text: 'Sair',
    link: '/logout'
  }
];

const publicItens = [
  {
    text: 'Login',
    link: '/login',
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItens: Array<any>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentAuth')) {
      this.menuItens = loggedItens;
    } else {
      this.menuItens = publicItens;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
