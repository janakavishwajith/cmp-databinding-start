import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, OnDestroy, AfterViewInit {  
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentPara') contentPara: ElementRef;

  constructor() {
    console.log("Constructor");
   }

  ngOnInit() {
    console.log("NG on init");
    console.log("textContent", this.header.nativeElement.textContent);
    console.log("Content text", this.contentPara.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log("After View init");
    console.log("textContent", this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngDoCheck(){
    console.log("NG do check");
  }

  ngAfterContentInit(){
    console.log("After Content Init");
    console.log("Content text", this.contentPara.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("After Content checked");
  }

  ngOnDestroy(){
    console.log("Component destroy");
  }

}
