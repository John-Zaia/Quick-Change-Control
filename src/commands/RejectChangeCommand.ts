import { Supabase } from "../config/Supabase";

export class RejectChangeCommand {

  private supabase = new Supabase();

  async execute(id: string) {
    await this.supabase.rejectRequest(id);
    return { message: "Request rejected" };
  }
}