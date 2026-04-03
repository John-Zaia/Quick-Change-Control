import { Supabase } from "../config/Supabase";
import { Command } from "./Command";

export class RejectChangeCommand extends Command {

  private supabase = new Supabase();

  async execute(id: string): Promise<any> {
    await this.supabase.rejectRequest(id);
    return { message: "Request rejected" };
  }
}