import { Module } from '@nestjs/common';
import { KoncertekService } from './koncertek.service';
import { KoncertekController } from './koncertek.controller';

@Module({
  controllers: [KoncertekController],
  providers: [KoncertekService],
})
export class KoncertekModule {}
