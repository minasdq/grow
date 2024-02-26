import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [ConfigModule.forRoot(), MailerModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
