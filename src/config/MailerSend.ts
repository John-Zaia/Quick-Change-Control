import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import dotenv from "dotenv";

dotenv.config();

export class MailerSendConfig{

  async sendTestEmail() {

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!
    });

    const sender = new Sender("john.zaia@outlook.com", "Test Change Request");

    const receiver = [
      new Recipient("zaiaj1@mcmaster.ca", "John Zaia")
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