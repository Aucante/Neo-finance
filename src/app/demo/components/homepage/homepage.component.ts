import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit, OnDestroy{

    subscription!: Subscription;
    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
