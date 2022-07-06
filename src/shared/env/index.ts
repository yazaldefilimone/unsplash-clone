export const env = {
  firebase: {
    key: process.env.FIREBASE_Key as string,
    authDomain: process.env.FIREBASE_AuthDomain as string,
    projectId: process.env.FIREBASE_ProjectId as string,
    storageBucket: process.env.FIREBASE_StorageBucket as string,
    messagingSenderId: process.env.FIREBASE_MessagingSenderId as string,
    appId: process.env.FIREBASE_AppId as string,
  },
};
