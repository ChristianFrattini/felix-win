import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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





  export const createUserDocument=async (nickname, email, id, selectedNumbers)=>{
    //const id=createUniqueId(50)
    //console.log(id)

    //emailChecker(email) //check if email has already been registered
    
    //console.log('here')

    const userDocRef = doc(db,'users', email)
    
    const userSnapshot=await getDoc(userDocRef);




    if(!userSnapshot.exists()){  //if document does not exist then create one
      const createdAt= new Date(); // creates date

      try{
        await setDoc(userDocRef, {nickname,email,selectedNumbers, createdAt,id})
        //setSubmittedDetails({id:id, nickname:nickname})
        
      }catch (error){
        console.log('error creating the user', error.message)
      }
      
    }else{
        console.log("Document data: existing");
        alert('Registration unsuccessful. Email already registered for the prize draw!')
        return
    }
    return userSnapshot;
    
  }




  export const getVar=async()=>{
      const docRef = doc(db,'vars', 'vars')
      const dataSnapshot=await getDoc(docRef);
      if(dataSnapshot.exists()){
        const data=dataSnapshot.data()
        //console.log(data.jackpot)
        return data
      }
      
  }

  
  