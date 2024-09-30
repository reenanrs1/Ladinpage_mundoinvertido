  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfVb-4AcKqTxyViHnY6Siheu4oMGwadWQ",
    authDomain: "mundo-invertido-reenanrs.firebaseapp.com",
    projectId: "mundo-invertido-reenanrs",
    storageBucket: "mundo-invertido-reenanrs.appspot.com",
    messagingSenderId: "896988731313",
    appId: "1:896988731313:web:d3d9f772bd25ad94358f90",
    measurementId: "G-P5RS1FCWCQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app

