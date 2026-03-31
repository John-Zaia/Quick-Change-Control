export class ChangeRequestModel {

  constructor(
    public title: string,
    public description: string,
    public risk: string,
    public caseNumber: string,
    public status: string,
    public requestEmail: string,
  ) {}

}