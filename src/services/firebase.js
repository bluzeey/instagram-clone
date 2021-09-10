import { Firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await Firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
        
    return result.docs.map((user) => user.data().length > 0);
}
export async function getUserbyUserId(userId){
    const result=await Firebase
    .firestore().
    collection('users')
    .where('userId','==',userId)
    .get()

    const user=result.docs.map((item)=>({
        ...item.data(),
        docId:item.id
    }))

    return user;
}