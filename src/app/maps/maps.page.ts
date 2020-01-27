import {Component, ElementRef, NgZone, ViewChild , AfterViewInit, OnInit } from '@angular/core';
import { Note } from '../modal/Note';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google: any;

@Component({
  selector: 'maps-note',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
  
export class MapsPage implements AfterViewInit {
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


    @ViewChild('map', { static: true }) mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = {lat: 14.7306299, lng: 104.6103476 };
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyDbMQmqVbaMmXTVwBzVOT9X-_BinpZ37Hs'; /*Your API Key*/
  
  constructor(
    public zone: NgZone,
    public geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router,
    private callNumber: CallNumber) { }
  
  ngAfterViewInit(): void {  
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  /*load google map script dynamically */

    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }
    document.head.appendChild(script);
    /*Get Current location
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });*/
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: false
    };
    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
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