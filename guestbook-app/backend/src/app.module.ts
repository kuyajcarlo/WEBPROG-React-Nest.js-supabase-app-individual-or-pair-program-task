import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestbookModule } from './guestbook/guestbook.module';

@Module({
  imports: [
    // This comment silences the "Type Promise<DynamicModule> is not assignable" error
    // @ts-ignore
    ConfigModule.forRoot({ isGlobal: true }), 
    GuestbookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
// This must be exported so main.ts can find it
export class AppModule {}