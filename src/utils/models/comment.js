import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import firebase from "../firebase/firebaseInit";
export default class Comment {
  constructor() {
    this.db = getFirestore(firebase);
    this.collection = collection(this.db, "comments");
  }
  async getComments(post) {
    const commentsColection = await getDocs(this.collection);
    const commentList = commentsColection.docs.map((doc) => doc.data());
    function isTied(comment) {
      return comment.post == post;
    }
    const test = commentList.filter(isTied);
    console.log(test);

    return test;
  }
  async newComment(post, name, comment) {
    const data = {
      post: post,
      author: name,
      comment: comment,
    };
    const docRef = await addDoc(this.collection, data);
  }
}
