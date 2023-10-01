/**
 * ****************************Initial Installation**********************
 * 1. visit>> console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app(create config)
 * 4. install firebase >> npm install firebase
 * 5. add config file to your project.
 * 6. Danger: do not publish  or make firebase config to public by pushing those to github.
 * 
 * *****************************Integration*******************************
 * 
 * 7. To initialize the Authentication Visit >> console doc. >> Build >> authentication >> web >> Get start.
 * 8. export app from the firebase.config.js file: export default app;
 * 9. Login.jsx: import getAuth form firebase/auth
 * 10. then create: const auth = getAuth(app);
 * 
 * ******************************Provider setup***********************
 * 
 * 11. then import GoogleAuthProvider and create new provider.
 * 12. use signInWithPopup and pass auth and provider
 * 13. Active sign in method (google,facebook, github etc.) form firebase authentication. 
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * 15. More Aurth provider
 * >> active the aurth provider.(create app, provide redirect url, client id...)
 * 
 */