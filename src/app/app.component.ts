import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  hidePoemDetails = true;
  constructor(private shared: SharedService){

  }

  ngOnInit(): void {
    
    this.shared.poem.subscribe( value => {
      if(value){
         this.hidePoemDetails = false;
      }
    })
    
  }

}
