import { Request, Response } from "express";
import { MailerSendConfig } from "../config/MailerSend";
import { SubmitChangeCommand } from "../commands/SubmitChangeCommand";
import { Supabase } from "../config/Supabase";
import { ApproveChangeCommand } from "../commands/ApproveChangeCommand";
import { RejectChangeCommand } from "../commands/RejectChangeCommand";

export class ChangeRequestController {

  //calls the SubmitChangeCommand class to submit form data to the db
  async submitRequest(req: Request, res: Response) {
      const command = new SubmitChangeCommand();
      const result = await command.execute(req.body);

      res.json(result);
  }

  //calls the ApproveChangeCommand to approve the request in the db
  async approveRequest(req: Request, res: Response)
  {
    const id = req.params.id as string;
    const command = new ApproveChangeCommand();
    const result = await command.execute(id);
    res.json(result);
  }

  //calls the MailerSendConfig class to send the approval email
  async sendApprovalEmail(req: Request ,res: Response)
  {
      const id = req.params.id as string;
      const mailService = new MailerSendConfig();
      await mailService.sendApprovalEmail(id);
      res.json(204);
  }

  //calls the Supabase class to get all the rows from the db
  async getAllRequests(req: Request, res: Response){
    
    const db = new Supabase();
    const data = await db.getAllChangeRequests();

    res.json(data);
  }

  //calls the RejectChangeCommand class to reject the request in the db
  async rejectRequest(req: Request, res: Response)
  {
    const id = req.params.id as string;
    const command = new RejectChangeCommand();
    const result = await command.execute(id);
    res.json(result);
  }

    //calls the MailerSendConfig class to send the rejection email
  async sendRejectionEmail(req: Request, res: Response)
  {
      const id = req.params.id as string;
      const mailService = new MailerSendConfig();
      await mailService.sendRejectionEmail(id);
      res.json(204);
  }
  
}