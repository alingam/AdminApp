import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Callback, CognitoUtil, LoggedInCallback } from '../../service/cognito.service';
import { UserParametersService } from '../../service/user-parameters.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

interface GamesData {
    id: String,
    name: String,
    themeUrl: String
}

@Component({
    selector: 'spark-admin-app',
    templateUrl: './create-game.html'
})
export class CreateGameComponent {

    public cognitoId: String;

    allGames: any = [];
    clueNumber: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(public router: Router, public userService: UserLoginService,
        public userParams: UserParametersService, public cognitoUtil: CognitoUtil, private http: HttpClient) {
        console.log('In CreateGameComponent');
    }

    getGames() {
        console.log(environment.gateway)
        this.http.get(environment.gateway + '/games').subscribe(
            res => {
                this.allGames = res;
                console.log('Printing response: ' + this.allGames);
            },
            err => { console.log('Error occurred: ' + err.message) }
        )
        return null;
    }

    discuss(game) {
        alert('Feature needs to discuss about QR codes: ' + game.name);
    }

    deleteGame(game) {
        console.log('Game inside delete: ' + JSON.stringify(game));
    }
}
