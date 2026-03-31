import { Request, Response } from "express";
import { MailerSendConfig } from "../config/MailerSend";
import { SubmitChangeCommand } from "../commands/SubmitChangeCommand";

export class ChangeRequestController {

  async testEmail(req: Request, res: Response) {
      const mailService = new MailerSendConfig();
      await mailService.sendTestEmail();
      res.json({ message: "Email sent successfully" });
    }

    async submitRequest(req: Request, res: Response) {

      const command = new SubmitChangeCommand();

      const result = await command.execute(req.body);

      res.json(result);
  }
  
}