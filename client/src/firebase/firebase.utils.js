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

// Use this function to add new categories to the collections or update a category
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Get the product categories from firebase and map them into objects
export const convertCollectionsSnapshotToMap  = (collections ) => {
  const transformedCollection  = collections.docs.map((doc) => {
    const {name, items } = doc.data();

    return {
      id: doc.id,
      name,
      items
    };
  });

  // reduce the transformed product categories for use with redux
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
