import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  get(): object {
    return {
      count: 100,
      items: [{ nome: 'ola1' }, { nome: 'ola2' }, { nome: 'ola3' }],
    };
  }
}
