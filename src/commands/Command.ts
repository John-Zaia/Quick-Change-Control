export abstract class Command {
  abstract execute(ChangeRequestData: any): Promise<any>;
}