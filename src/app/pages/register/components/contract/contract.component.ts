import { Component, Input, OnInit, inject, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule, RouterLink],
})
export class ContractComponent implements OnInit {
  @Input() public step: number = 3;
  title = output<string>();

  btnFinalize: boolean = false;

  private router = inject(Router);

  ngOnInit(): void {
    this.title.emit('FINALIZAR');
  }

  onCheckContract(target: any) {
    this.btnFinalize = target.checked;
  }

  onFinalize() {
    this.router.navigate(['/finalize']);
  }
}
