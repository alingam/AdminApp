import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Callback, CognitoUtil, LoggedInCallback } from '../../service/cognito.service';
import { UserParametersService } from '../../service/user-parameters.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Http } from 'aws-sdk/clients/xray';


@Component({
    selector: 'spark-admin-app',
    templateUrl: './games.html'
})
export class GamesComponent implements LoggedInCallback {

    public cognitoId: String;

    constructor(public router: Router, public userService: UserLoginService,
        public userParams: UserParametersService, public cognitoUtil: CognitoUtil, public http: Http) {
        this.userService.isAuthenticated(this);
        console.log('In GamesComponent');
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            console.log('...............');
            this.getGames();
            // this.userParams.getParameters(new GetParametersCallback(this, this.cognitoUtil));
        }
    }

    getGames() {
        console.log(environment.gateway)
        return null;
    }
}
