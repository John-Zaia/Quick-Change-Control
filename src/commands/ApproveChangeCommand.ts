import { Supabase } from "../config/supabase";

export class ApproveChangeCommand {

  private supabase = new Supabase();

  async execute(id: string) {
    await this.supabase.approveRequest(id);
    return { message: "Request approved" };
  }
}