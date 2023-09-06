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


  const createUniqueId=(length)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let code = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
  
    return code;
  }

  const emailChecker= async(email)=>{  //determines whether the user has already applied for the prize dra
    const docRef = doc(db, 'users', email);  //collection is taken with the email currently submitted
    const docSnap = await getDoc(docRef); 

    if (docSnap.exists()) {  //if the docsnap exists(email existing) then return
        console.log("Document data: existing");
        alert('Email already registered for the prize draw')
        return
    } else {
        console.log("Creating New User Document...");
    }
  }







  export const createUserDocument=async (nickname, email, id)=>{
    //const id=createUniqueId(50)
    //console.log(id)

    emailChecker(email) //check if email has already been registered

    const userDocRef = doc(db,'users', email)
    
    const userSnapshot=await getDoc(userDocRef);

    if(!userSnapshot.exists()){  //if document does not exist then create one
      const createdAt= new Date(); // creates date

      try{
        await setDoc(userDocRef, {nickname,email,createdAt,id})
        //setSubmittedDetails({id:id, nickname:nickname})
        
      }catch (error){
        console.log('error creating the user', error.message)
      }
      
    }
    return userSnapshot;
    
  }