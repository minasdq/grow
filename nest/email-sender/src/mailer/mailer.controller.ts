import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendMailDto } from './dto/mailer.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-mail')
  async sendmail(@Body() body: Record<string, string>) {
    const dto: SendMailDto = {
      recipients: [
        {
          name: 'Mina',
          address: 'iminasdq@gmail.com',
        },
      ],
      html: '<p>Hi<b>Mina</b></p>',
      subject: 'Hello from Nest',
    };

    await this.mailerService.sendMail(dto);
  }
}
