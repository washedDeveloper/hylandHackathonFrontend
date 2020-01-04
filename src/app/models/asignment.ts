export class Asignment {
  AsignmentID: string;
  ClassID: string;
  Title: string;
  Description: string;
  DueDate: string;
  constructor(AsignmentID, Title, Description, DueDate){
    this.AsignmentID = AsignmentID;
    this.Title = Title;
    this.Description = Description;
    this.DueDate = DueDate;
  }
}
