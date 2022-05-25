import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '@app/core/services/log-service.service';
import { Brand } from '../model/brand';

@Component({
  selector: 'ns-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.scss'],
})
export class BrandMainComponent implements OnInit {
 public brand: Brand;
  constructor(private logger: LogService, private route: ActivatedRoute) {
    this.brand = this.route.snapshot.data['brand'];
    this.logger.verbose('BrandMainComponent:: resolved DATA:', this.brand);
  }

  ngOnInit(): void {}
}
