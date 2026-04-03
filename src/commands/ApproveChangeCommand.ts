import { Supabase } from "../config/Supabase";

export class ApproveChangeCommand {

  private supabase = new Supabase();

  async execute(id: string) {
    await this.supabase.approveRequest(id);
    return { message: "Request approved" };
  }
}