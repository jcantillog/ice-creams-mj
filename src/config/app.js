// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCAgl-_OeqgrpzGb055lUaHkfKhVJx0Igg",
  authDomain: "ice-creams-mj.firebaseapp.com",
  databaseURL: "https://ice-creams-mj.firebaseio.com",
  projectId: "ice-creams-mj",
  storageBucket: "ice-creams-mj.appspot.com",
  messagingSenderId: "826041028428",
  appId: "1:826041028428:web:86049a18945518007ec9e9",
  measurementId: "G-CD7LMF80TV"
};

// Firebaseui configuration
const firebaseuiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  // Terms of service url.
  tosUrl: 'https://ionicframework.com/docs/components',
  // Privacy policy url.
  privacyPolicyUrl: 'https://ionicframework.com/docs/components'
};

export default {
  firebaseConfig,
  firebaseuiConfig
};
