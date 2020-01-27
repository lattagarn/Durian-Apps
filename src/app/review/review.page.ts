import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../modal/Review';
import {FirebaseService} from '../services/firebase1.service';
import {Router} from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  private notes: Observable<Review[]>;

  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private callNumber: CallNumber) { }

  ngOnInit(): void {
    this.notes = this.fbService.getNotes();
  }

  home() {
    this.router.navigate(['/durian']);
}
 
maps() {
 this.router.navigate(['/maps']);
}
 
review() {
 this.router.navigate(['/review']);
}

 callNow(number) {
   this.callNumber.callNumber(number, true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
 }

}
