import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Apple';
    this.description = 'Apple al parco con la sua palletta';
    this.createdDate = new Date();
    this.snaps = 6
    this.imageUrl = 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.18169-9/10440834_10204401506457317_3729761187197286767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4IidxSJHUDcAX-NfTyS&_nc_ht=scontent.fmxp5-1.fna&oh=00_AfAL5-skZzU3YqxzW3qhym-0NhljxCpJlyRiNMFJL81YGg&oe=64B266F6';
    this.buttonText = 'Oh Snap!';

  }

  onSnap(){
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unsnap!';
    }else{
      this.snaps--;
      this.buttonText = 'Oh Snap!';

    }
  }

}
