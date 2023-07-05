import { Injectable } from "@angular/core";
import { FaceSnap } from "src/app/models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService{
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Apple',
      description: 'Apple al parco con la sua palletta',
      imageUrl:'https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.18169-9/10440834_10204401506457317_3729761187197286767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4IidxSJHUDcAX-NfTyS&_nc_ht=scontent.fmxp5-1.fna&oh=00_AfAL5-skZzU3YqxzW3qhym-0NhljxCpJlyRiNMFJL81YGg&oe=64B266F6',
      createdDate: new Date(),
      snaps: 140,
      location: 'Roma'
    },
    {
      id: 2,
      title: 'Scott',
      description: 'Scott al parco',
      imageUrl: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t1.18169-9/10606527_10204409989869397_6562112433066392422_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-LeUcxguTNAAX-jbGV6&_nc_ht=scontent.fmxp5-1.fna&oh=00_AfBM8r8aS5kSO14Gztk8SFScVOtN7LYNlO1Jn8Xqqirffw&oe=64B28D99',
      createdDate: new Date(),
      snaps: 0,
      location: 'Roma'
    },
    {
      id: 3,
      title: 'Golden Gate Bridge',
      description: 'Il Golden Gate Bridge, San Francisco',
      imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      createdDate: new Date(),
      snaps: 60
      },
      {
        id: 4,
        title: 'Neon',
        description: 'Scritta a neon in un bar',
        imageUrl:'https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        createdDate: new Date(),
        snaps: 10,
      },
      {
        id: 5,
        title: 'Chicago al tramonto',
        description: 'Una strada di Chicaco',
        imageUrl: 'https://images.unsplash.com/photo-1521127149192-4438d6686c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: 'Chicago'
      },
      {
        id: 6,
        title: 'I Fori Imperiali',
        description: 'Vista sui Fori',
        imageUrl: 'https://images.unsplash.com/photo-1626285220266-e35bd313d05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
        createdDate: new Date(),
        snaps: 48,
        location: 'Roma'
        }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
