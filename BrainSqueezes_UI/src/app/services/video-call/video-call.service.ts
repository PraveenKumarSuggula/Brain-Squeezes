// // video-call.service.ts
// import { Injectable } from '@angular/core';
// import * as SimplePeer from 'simple-peer';

// @Injectable({
//   providedIn: 'root',
// })
// export class VideoCallService {
//   private peer: SimplePeer.Instance | undefined;

//   constructor() {}

//   startCall() {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       this.peer = new SimplePeer({
//         initiator: true,
//         stream: stream,
//       });

//       this.setupPeerListeners();
//     });
//   }

//   joinCall() {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       this.peer = new SimplePeer();

//       this.setupPeerListeners();

//       // Signal to establish the connection
//       this.peer.signal(/* Signal from other user */);
//     });
//   }

//   private setupPeerListeners() {
//     if (!this.peer) {
//       return;
//     }

//     this.peer.on('signal', (data:any) => {
//       // Send this signal data to the other user
//     });

//     this.peer.on('stream', (stream:any) => {
//       // Handle the stream (e.g., display in a video element)
//     });
//   }
// }
