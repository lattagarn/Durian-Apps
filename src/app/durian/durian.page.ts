import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../modal/Note';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-durian',
  templateUrl: 'durian.page.html',
  styleUrls: ['durian.page.scss'],
})
export class DurianPage implements OnInit{
  private notes: Observable<Note[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void {
    this.notes = this.fbService.getNotes();
  }
 
}
