import { Request, Response } from "express";
import { MailerSendConfig } from "../config/MailerSend";
import { SubmitChangeCommand } from "../commands/SubmitChangeCommand";
import { Supabase } from "../config/supabase";
import { ApproveChangeCommand } from "../commands/ApproveChangeCommand";
import { RejectChangeCommand } from "../commands/RejectChangeCommand";

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

  async approveRequest(req: Request, res: Response)
  {
    const id = req.params.id as string;
    const command = new ApproveChangeCommand();
    const result = await command.execute(id);
    res.json(result);
  }

  async getAllRequests(req: Request, res: Response){
    
    const db = new Supabase();
    const data = await db.getAllChangeRequests();

    res.json(data);
  }

  
  async rejectRequest(req: Request, res: Response)
  {
    const id = req.params.id as string;
    const command = new RejectChangeCommand();
    const result = await command.execute(id);
    res.json(result);
  }
  
}