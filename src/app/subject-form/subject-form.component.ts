import { Component } from '@angular/core';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent{

  model = new Subject('Chemistry');

  constructor() { }

  ngOnInit() {
  }

  getDiagnostic() {
    return JSON.stringify(this.model);
  }

}
