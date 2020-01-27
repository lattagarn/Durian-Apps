import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase1.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import { Review } from '../modal/Review';
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.page.html',
  styleUrls: ['./review-add.page.scss'],
})
export class ReviewAddPage implements OnInit {

  note: Review = {
    name: '',
    detail: ''
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private router: Router,
      public alert : AlertController
  ) { }

  ngOnInit() {
  }

  addNote() {
    this.fbService.addNote(this.note).then(() => {
      this.showAlert("ขอบคุณ", "ขอบคุณสำหรับการรีวิว")
      this.router.navigateByUrl('/')
    }, err => {
    });
  }

  async showAlert(header : string, message : string){
    const alert = await this.alert.create({
      header,
      message,
      buttons:["Ok"]
    })
    await alert.present()
  }
}
