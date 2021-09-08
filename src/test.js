import firebase from "firebase";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("OiWyHCEDVNOYnXDSe5ow")
  .collection("cartItems")
  .doc("Pr8I8e82qXW6D8ZXd1Ms");
firestore.doc("/users/OiWyHCEDVNOYnXDSe5ow/cartItems/Pr8I8e82qXW6D8ZXd1Ms");
firestore.collection("/users/OiWyHCEDVNOYnXDSe5ow/cartItems");
