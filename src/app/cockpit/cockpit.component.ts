import { Component, OnInit, EventEmitter, Output,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output('svrCrtd') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });  
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });  
    // this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent });  
    
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });  
    // this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent });  
  }

}
