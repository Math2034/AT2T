import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objetivo-detalhe',
  templateUrl: './objetivo-detalhe.page.html',
  styleUrls: ['./objetivo-detalhe.page.scss'],
})
export class ObjetivoDetalhePage implements OnInit {
  objetivo: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.objetivo = getNav.extras.state.paramObjetivo;
      }
    });
  }
}
