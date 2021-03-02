import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
//paste in another config file here
const config = {
	// apiKey: "AIzaSyDsmjcSckOhSc6TnSpyOhR8d7XFOveB0P4",
	// authDomain: "voucha-d7c52.firebaseapp.com",
	// projectId: "voucha-d7c52",
	// storageBucket: "voucha-d7c52.appspot.com",
	// messagingSenderId: "102604826038",
	// appId: "1:102604826038:web:613c54f06724dea172cd17",
	// measurementId: "G-MNETX24CJ0",
	apiKey: "AIzaSyAwTAZo7qgkNNHaBM1hniNDTfyy1TP5u7g",
	authDomain: "crown-80185.firebaseapp.com",
	projectId: "crown-80185",
	storageBucket: "crown-80185.appspot.com",
	messagingSenderId: "519345761723",
	appId: "1:519345761723:web:74f6eccf7e62ddc8c0e89e",
	measurementId: "G-FC9JYERCL1",
};

//Write a function that stores users in your database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	//userRef is the document with the user; its uid
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
	//check if snapshot exists and create a user using the documentRef CRUD
	if (!snapShot.exists) {
		//if user doesnt exist
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			//set is a firebase property used to create a new user
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("There was an error creating user", error);
		}
	}
	return userRef;
};

//passing the configuration of your project to firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//enables Gmail google prompt to select account
provider.setCustomParameters({ prompt: "select_account" });

//using the signin popup to signin with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
