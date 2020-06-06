import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCbl0dFzAVGyxpI5x307vuDIVEZsfqrYo0",
  authDomain: "kenido-db.firebaseapp.com",
  databaseURL: "https://kenido-db.firebaseio.com",
  projectId: "kenido-db",
  storageBucket: "kenido-db.appspot.com",
  messagingSenderId: "344855072677",
  appId: "1:344855072677:web:008fca20366eff81ebe24c",
  measurementId: "G-RJVPQEYQNY",
};

// Get the product categories from firebase and map them into objects
export const convertCollectionsSnapshotToMap  = (collections ) => {
  const transformedCollection  = collections.docs.map((doc) => {
    const { routeName, name, items, previewImageUrl } = doc.data();

    return {
      routeName: encodeURI(routeName.toLowerCase()),
      id: doc.id,
      name,
      items,
      previewImageUrl
    };
  });

  // reduce the transformed product categories for use with redux
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.routeName.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

