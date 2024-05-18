import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  //   limit,
  //   onSnapshot,
  query,
  where,
  // updateDoc,
  // addDoc,
} from "firebase/firestore";

import { COLLECTION_NAMES } from "../firebase/collection";
import { db } from "../firebase";

const generateRefId = () => {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var refId = "";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    refId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return refId;
};

const createRequest = async (params) => {
  try {
    let id;
    let docSnapshot;
    let userDoc;
    do {
      id = generateRefId();
      userDoc = doc(db, COLLECTION_NAMES.FORM_REQUESTS, id);
      docSnapshot = await getDoc(userDoc);
    } while (docSnapshot.exists());

    const data = {
      id: id,
      userId: params.userId,
      type: params.type,
      createdAt: new Date().getTime(),
      status: "pending",
      ...(params?.businessData ? { businessData: params.businessData } : {}),
    };
    await setDoc(userDoc, data);

    return data;
  } catch (error) {
    console.log("createRequest error: ", error);
  }
};

const getRequestsByUserId = async (userId) => {
  try {
    const requestsRef = collection(db, COLLECTION_NAMES.FORM_REQUESTS);
    const q = query(requestsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => doc.data());
    } else {
      console.log("No requests found for this user!");
      return [];
    }
  } catch (error) {
    console.log("getRequestsByUserId error: ", error);
  }
};

export { createRequest, getRequestsByUserId };
