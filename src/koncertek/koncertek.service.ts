import { Injectable } from '@nestjs/common';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertekService {
  constructor(private prisma: PrismaService){}
  create(createKoncertekDto: CreateKoncertekDto) {
    return 'This action adds a new koncertek';
  }

  findAll() {
    return `This action returns all koncertek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} koncertek`;
  }

  update(id: number, updateKoncertekDto: UpdateKoncertekDto) {
    return `This action updates a #${id} koncertek`;
  }

  remove(id: number) {
    return `This action removes a #${id} koncertek`;
  }
}
