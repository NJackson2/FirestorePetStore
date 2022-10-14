import { initializeApp, cert } from "firebase-admin/app";
import{ getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './serviceAccount.js';

initializeApp ({
    credential: cert(serviceAccount)
})

const db = getFirestore()

// const newCustomer1 = {
//     name: "Diane",
//     phone: 3051357921,
//     address: "Fort Lauderdale",
//     email: 'diane@email.com',
// }

// db.collection('customers').add(newCustomer1)
//     .then(doc => console.log('Customer added: ', doc.id))
//     .catch(console.error)


// const newPet = {
//     species: "Snake",
//     subSpecies: "Rattlesnake",
//     vaccinated: false,
//     age: '3 years',
// }

// db.collection('pets').add(newPet)
//     .then(doc => console.log('Pet added: ', doc.id))
//     .catch(console.error)

const newProduct = {
    name: 'Scratching post',
    price: "$59.99",
    SKU: 7690156,
    yearStocked: 2022
}

db.collection('products').add(newProduct)
    .then(doc => console.log('Product added: ', doc.id))
    .catch(console.error)








