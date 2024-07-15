import { Controller, Get } from '@nestjs/common';
import { DashboardService } from 'src/dashboard/dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('')
  async uploadImage() {
    try {
      const data = await this.dashboardService.get();
      return data;
    } catch (error) {
      return { message: 'Failed get data', error: error.message };
    }
  }
}
