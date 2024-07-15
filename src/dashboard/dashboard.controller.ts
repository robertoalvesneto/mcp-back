import { Controller, Get } from '@nestjs/common';

import { DashboardService } from 'src/dashboard/dashboard.service';
import { ItemQuantity } from './item';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('qtd')
  async readQuantities(): Promise<ItemQuantity> {
    return this.dashboardService.getQuantity();
  }
}
