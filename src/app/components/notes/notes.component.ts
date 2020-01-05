import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(public api: ApiService) { }
  data: any;
  notes: any[];
  ngOnInit() {
    this.data = this.api.getData();
    this.notes = this.data.userDetails.Notes;
    console.log(this.notes)
  }

}
