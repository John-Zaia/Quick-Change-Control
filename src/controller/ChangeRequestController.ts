import { Request, Response } from "express";
import { MailerSendConfig } from "../config/MailerSend";

export class ChangeRequestController {

  async testEmail(req: Request, res: Response) {
      const mailService = new MailerSendConfig();
      await mailService.sendTestEmail();
      res.json({ message: "Email sent successfully" });
    }
}