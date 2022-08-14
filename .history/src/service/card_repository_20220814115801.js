import firebaseApp from './firebase';
import { getDatabase, ref, set } from "firebase/database";

class CardRepository {
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
}

export default CardRepository;