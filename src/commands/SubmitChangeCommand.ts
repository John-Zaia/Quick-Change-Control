import { ChangeRequestModel } from "../model/ChangeRequest";
import { Supabase } from "../config/supabase";

export class SubmitChangeCommand {

  private databaseService = new Supabase();

  async execute(data: any) {

    const changeRequest = new ChangeRequestModel(
      data.title,
      data.description,
      data.risk,
      data.caseNumber,
      "Pending",
      data.email
    );

    await this.databaseService.saveChangeRequest(changeRequest);

    return { message: "Change request created", data: changeRequest };
  }

}