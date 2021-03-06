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
    templateUrl: './games.html'
})
export class GamesComponent implements LoggedInCallback {

    public cognitoId: String;

    allGames: any = [];

    constructor(public router: Router, public userService: UserLoginService,
        public userParams: UserParametersService, public cognitoUtil: CognitoUtil, private http: HttpClient) {
        this.userService.isAuthenticated(this);
        console.log('In GamesComponent');
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            this.getGames();
        }
    }

    createGame() {
        this.router.navigate(['/securehome/new']);
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
