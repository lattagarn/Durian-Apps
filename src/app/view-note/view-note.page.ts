import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Note } from '../modal/Note';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit, AfterViewInit {
  note: Note = {
    name: '',
    time: '',
    tel: '',
    address: '',
    createdAt: '',
    img: '',
    link: '',
    lat: '',
    lng: ''
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router,
    private callNumber: CallNumber) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
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

  callNow() {
    this.callNumber.callNumber('{{note.tel}}', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
