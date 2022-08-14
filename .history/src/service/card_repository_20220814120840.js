import firebaseApp from 'firebase';


class CardRepository {
  saveCard(userId, card) {
      firebaseApp.database().ref(`${userId}`)
    }
}

export default CardRepository;