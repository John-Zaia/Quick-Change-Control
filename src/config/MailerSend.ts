import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import dotenv from "dotenv";

dotenv.config();

export class MailerSendConfig{

  async sendTestEmail() {

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!
    });

    const sender = new Sender("admin@test-p7kx4xwrpnmg9yjr.mlsender.net", "Test Change Request");

    const receiver = [
      new Recipient("john.zaia@outlook.com", "John Zaia")
    ];

    const emailParameters = new EmailParams()
      .setFrom(sender)
      .setTo(receiver)
      .setSubject("Test")
      .setText("Test.");

    const response = await mailerSend.email.send(emailParameters);

    console.log(response);
  }

}