// Firebase configuration for collecting rewire briefs.
//
// This reuses the LTAIS Firebase project. Briefs are stored in their own
// collection so they never mix with the LTAIS cards.
//
// ONE-TIME STEP (about 2 minutes): the Firestore rules must allow this
// collection. In https://console.firebase.google.com -> project "ltais-f31a0"
// -> Firestore Database -> Rules, add the second match block and publish:
//
//   rules_version = '2';
//   service cloud.firestore {
//     match /databases/{database}/documents {
//       match /cards/{card} {
//         allow read, create, update: if true;
//         allow delete: if false;
//       }
//       match /aisi_briefs/{brief} {
//         allow read, create, update: if true;
//         allow delete: if false;
//       }
//     }
//   }
//
// Until that rule is published, the brief page works normally (download,
// copy, email) and simply does not record submissions; the facilitator view
// shows a notice saying so.
//
// These values are public identifiers, not secrets: access is controlled by
// the Firestore rules above, not by hiding this config.
window.FIREBASE_COLLECTION = "aisi_briefs";
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDIClcTcAoWxgmHvtoWN7YZduICwxdAYKA",
  authDomain: "ltais-f31a0.firebaseapp.com",
  projectId: "ltais-f31a0",
  storageBucket: "ltais-f31a0.firebasestorage.app",
  messagingSenderId: "953468160360",
  appId: "1:953468160360:web:3d1388541e46bc1b2faedd"
};
