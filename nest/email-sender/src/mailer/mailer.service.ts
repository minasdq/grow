import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import Mail from 'nodemailer/lib/mailer';

import { SendMailDto } from './dto/mailer.dto';

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  getTransporter() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USERNAME'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });

    return transporter;
  }

  async sendMail(sendMailDto: SendMailDto) {
    const transport = this.getTransporter();
    const options: Mail.Options = {
      from: sendMailDto.from ?? {
        address: this.configService.get<string>('DEFAULT_EMAIL_FROM'),
        name: this.configService.get<string>('APP_NAME'),
      },
      html: sendMailDto.html,
      to: sendMailDto.recipients,
      subject: sendMailDto.subject,
    };

    try {
      const result = await transport.sendMail(options);
      return result;
    } catch (e) {
      console.error('error in sending email', e);
    }
  }
}
