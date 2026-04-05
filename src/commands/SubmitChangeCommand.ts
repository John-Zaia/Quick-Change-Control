import { ChangeRequestModel } from "../model/ChangeRequest";
import { Supabase } from "../config/Supabase";
import { Command } from "./Command"

export class SubmitChangeCommand extends Command {

  private supabase = new Supabase();

  async execute(data: any): Promise<any> {

    const changeRequest = new ChangeRequestModel(
      data.title,
      data.description,
      data.risk,
      data.caseNumber,
      "Pending",
      data.email
    );

    await this.supabase.saveChangeRequest(changeRequest);

    return { message: "Change request created", data: changeRequest };
  }

}