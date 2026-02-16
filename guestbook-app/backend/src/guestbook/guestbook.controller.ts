import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';

@Controller('guestbook')
export class GuestbookController { // <--- ENSURE 'export' IS HERE
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  async getAll() {
    return this.guestbookService.getAll();
  }

  @Post()
  async create(@Body() entry: { name: string; message: string }) {
    return this.guestbookService.create(entry);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.guestbookService.delete(id);
  }
}