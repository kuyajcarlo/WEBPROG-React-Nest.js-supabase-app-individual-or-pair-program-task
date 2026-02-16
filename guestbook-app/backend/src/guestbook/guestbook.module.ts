import { Module } from '@nestjs/common';
import { GuestbookController } from './guestbook.controller'; // This is what was erroring
import { GuestbookService } from './guestbook.service';

@Module({
  controllers: [GuestbookController],
  providers: [GuestbookService],
})
export class GuestbookModule {}