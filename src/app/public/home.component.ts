import { Component, OnInit } from '@angular/core';

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'spark-admin-app',
    template: '<p>Hello and welcome!</p>'
})
export class AboutComponent {

}

@Component({
    selector: 'spark-admin-app',
    templateUrl: './landinghome.html'
})
export class HomeLandingComponent{
    constructor() {
        console.log('HomeLandingComponent constructor');
    }
}

@Component({
    selector: 'spark-admin-app',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log('HomeComponent constructor');
    }

    ngOnInit() {

    }
}


