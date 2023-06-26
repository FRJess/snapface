import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Apple',
        description: 'Apple al parco con la sua palletta',
        imageUrl:'https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.18169-9/10440834_10204401506457317_3729761187197286767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4IidxSJHUDcAX-NfTyS&_nc_ht=scontent.fmxp5-1.fna&oh=00_AfAL5-skZzU3YqxzW3qhym-0NhljxCpJlyRiNMFJL81YGg&oe=64B266F6',
        createdDate: new Date(),
        snaps: 140,
        location: 'Roma'
      },
      {
        title: 'Scott',
        description: 'Scott al parco',
        imageUrl: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.18169-9/10606527_10204409989869397_6562112433066392422_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-LeUcxguTNAAX-jbGV6&_nc_ht=scontent.fmxp5-1.fna&oh=00_AfBM8r8aS5kSO14Gztk8SFScVOtN7LYNlO1Jn8Xqqirffw&oe=64B28D99',
        createdDate: new Date(),
        snaps: 0,
        location: 'Roma'
      },
      {
        title: 'Golden Gate Bridge',
        description: 'Il Golden Gate Bridge, San Francisco',
        imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        createdDate: new Date(),
        snaps: 0
        }
    ];
  }
}
