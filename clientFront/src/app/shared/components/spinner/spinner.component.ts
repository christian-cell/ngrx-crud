import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentToSpinnerComponentService } from '../../services';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit , OnDestroy {

  showSpinner:                                         boolean = false;
  componentSubscription:                        Subscription;

  constructor(
    private componentToSpinnerComponentService:        ComponentToSpinnerComponentService
  ) {
    this.componentSubscription = componentToSpinnerComponentService
    .onMessage().subscribe(message => {
      
      if(message){
        message === 'hide' ? this.showSpinner = false : this.showSpinner=true
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentSubscription.unsubscribe();
  }

}
