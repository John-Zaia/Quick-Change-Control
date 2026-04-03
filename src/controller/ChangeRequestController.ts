import { Request, Response } from "express";
import { MailerSendConfig } from "../config/MailerSend";
import { SubmitChangeCommand } from "../commands/SubmitChangeCommand";
import { Supabase } from "../config/Supabase";
import { ApproveChangeCommand } from "../commands/ApproveChangeCommand";
import { RejectChangeCommand } from "../commands/RejectChangeCommand";

export class ChangeRequestController {

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

  async sendApprovalEmail(req: Request ,res: Response)
  {
      const id = req.params.id as string;
      const mailService = new MailerSendConfig();
      await mailService.sendApprovalEmail(id);
      res.json(204);
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

  async sendRejectionEmail(req: Request, res: Response)
  {
      const id = req.params.id as string;
      const mailService = new MailerSendConfig();
      await mailService.sendRejectionEmail(id);
      res.json(204);
  }
  
}