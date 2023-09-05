import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc, collection} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBCSBXYV4CnNzfIVQRzJ0bYMnYjR_w2QJQ",
    authDomain: "felix-win-db.firebaseapp.com",
    projectId: "felix-win-db",
    storageBucket: "felix-win-db.appspot.com",
    messagingSenderId: "737675506342",
    appId: "1:737675506342:web:2ce875990fe8398f053a67"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db=getFirestore();

  //const createUniqueId=()=> Math.random().toString(36)

  const createUniqueId=(length)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let code = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
  
    return code;
  }

  const emailChecker= async(email)=>{
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data: existing");
        alert('Email already registered for the prize draw')
        return
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
  }





  export const createUserDocument=async (nickname, email)=>{
    const id=createUniqueId(50)
    console.log(id)

    if(emailChecker(email)){

    const userDocRef = doc(db,'users', email)

    console.log('here')

    const userSnapshot=await getDoc(userDocRef);

    if(!userSnapshot.exists()){  //if document does not exist then create one
      const createdAt= new Date(); // creates date

      try{
        await setDoc(userDocRef, {nickname,email,createdAt,id})
      }catch (error){
        console.log('error creating the user', error.message)
      }
      
    }
    return userSnapshot;
    }else{
       alert('oi')
    }
  }