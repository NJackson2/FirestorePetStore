import { initializeApp, cert } from "firebase-admin/app";
import{ getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './serviceAccount.js';

initializeApp ({
    credential: cert(serviceAccount)
})

const db = getFirestore()

// create new customer collection

// const newCustomer1 = {
//     name: "Diane",
//     phone: 3051357921,
//     address: "Fort Lauderdale",
//     email: 'diane@email.com',
// }

// db.collection('customers').add(newCustomer1)
//     .then(doc => console.log('Customer added: ', doc.id))
//     .catch(console.error)

// create new pet collection

// const newPet = {
//     species: "Snake",
//     subSpecies: "Rattlesnake",
//     vaccinated: false,
//     age: '3 years',
// }

// db.collection('pets').add(newPet)
//     .then(doc => console.log('Pet added: ', doc.id))
//     .catch(console.error)

// create new product collection 

// const newProduct = {
//     name: 'Scratching post',
//     price: "$59.99",
//     SKU: 7690156,
//     yearStocked: 2022
// }

// db.collection('products').add(newProduct)
//     .then(doc => console.log('Product added: ', doc.id))
//     .catch(console.error)


// list all pets, products and customers

// db.collection('products').get()
//     .then(collection => {
//     collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())
//     })
// })

// db.collection('pets').get()
//     .then(collection => {
//     collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())
//     })
// })

// db.collection('customers').get()
//     .then(collection => {
//     collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())
//     })
// })


// updating documents in collection

// db.collection("pets").doc('Pp7m3YcTa5Ip5fpoZ6g0')
//     .update({breed: "shorthair"})
//     .then(() => console.log('Update Done'))
//     .catch(console.error)

// db.collection("products").doc('JBLzYbheRKCYgFHdYKRd')
//     .update({price: "$99.99"})
//     .then(() => console.log('Update Done'))
//     .catch(console.error)










