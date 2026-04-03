import { Supabase } from "../config/Supabase";
import { Command } from "./Command"

export class ApproveChangeCommand extends Command {

  private supabase = new Supabase();

  async execute(id: string): Promise<any> {
    await this.supabase.approveRequest(id);
    return { message: "Request approved" };
  }
}