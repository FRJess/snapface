import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from 'src/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unsnap!';
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';

    }
  }
}
