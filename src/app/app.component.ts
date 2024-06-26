import { CSP_NONCE, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'csp-config';

  cpsNonce = inject(CSP_NONCE);

  ngOnInit() {
    console.log(this.cpsNonce);
  }
}
