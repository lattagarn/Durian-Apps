import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../modal/Review';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private notes: Observable<Review[]>;
  private noteCollection: AngularFirestoreCollection<Review>;

  constructor(private afs: AngularFirestore) {
    this.noteCollection = this.afs.collection<Review>('review');
    this.notes = this.noteCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getNotes(): Observable<Review[]> {
    return this.notes;
  }

  getNote(id: string): Observable<Review> {
    return this.noteCollection.doc<Review>(id).valueChanges().pipe(
        take(1),
        map(note => {
          note.id = id;
          return note;
        })
    );
  }

  addNote(note: Review): Promise<DocumentReference> {
    return this.noteCollection.add(note);
  }

  updateNote(note: Review): Promise<void> {
    return this.noteCollection.doc(note.id).update({ name: note.name,  detail: note.detail });
  }

  deleteNote(id: string): Promise<void> {
    return this.noteCollection.doc(id).delete();
  }
}
