import { Component, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Input() toggle:any
  @Output() searchUserName = new EventEmitter<string>() 
  userName!: string;
  

  getUser(){
    this.searchUserName.emit(this.userName);
    // console.log(this.userName);
  }
}
