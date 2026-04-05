import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import dotenv from "dotenv";
import { Supabase } from "./Supabase";

dotenv.config();

export class MailerSendConfig{

  //sends an approval email to the user via mailersend
  async sendApprovalEmail(id: string)
  {
    
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!
    });

    const db = new Supabase();
    const approvedRequest = await db.approveRequest(id);
    const recipientEmail = approvedRequest.email;

    const sender = new Sender("admin@test-p7kx4xwrpnmg9yjr.mlsender.net", "Manager");
    const receiver = [
      new Recipient(recipientEmail)
    ];

    const emailParameters = new EmailParams()
      .setFrom(sender)
      .setTo(receiver)
      .setSubject("Your Change Request has been approved")
      .setText("Your change request has been approved.");

    const response = await mailerSend.email.send(emailParameters);

    console.log(response);
  }

   //sends an rejection email to the user via mailersend
  async sendRejectionEmail(id: string)
  {
        
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!
    });

    const db = new Supabase();
    const rejectedRequest = await db.rejectRequest(id);
    const recipientEmail = rejectedRequest.email;

    const sender = new Sender("admin@test-p7kx4xwrpnmg9yjr.mlsender.net", "Manager");
    const receiver = [
      new Recipient(recipientEmail)
    ];

    const emailParameters = new EmailParams()
      .setFrom(sender)
      .setTo(receiver)
      .setSubject("Your Change Request has been denied")
      .setText("Your change request has been denied.");

    const response = await mailerSend.email.send(emailParameters);

    console.log(response);
  }
}