import { buffer } from 'micro'
import admin from 'firebase-admin'

const { privateKey } = JSON.parse(process.env.FIREBASE_ADMIN_PV_KEY)

const serviceAccount = {
  "type": "service_account",
  "project_id": "amazn-clone-nextjs",
  "private_key_id": process.env.FIREBASE_ADMIN_PV_KEY_ID,
  "private_key": privateKey,
  "client_email": "firebase-adminsdk-ou23r@amazn-clone-nextjs.iam.gserviceaccount.com",
  "client_id": process.env.FIREBASE_ADMIN_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ou23r%40amazn-clone-nextjs.iam.gserviceaccount.com"
}

const app = !admin.apps.length ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount)})
: admin.app()

const db = admin.firestore()

const fulfillOrder = async (session)=>{
    return db
            .collection('users')
            .doc(session.metadata.email)
            .collection('orders')
            .doc(session.id)
            .set({
                amount : session.amount_total / 100,
                amount_shipping : session.total_details.amount_shipping / 100,
                images : JSON.parse(session.metadata.images),
                timestamp : admin.firestore.FieldValue.serverTimestamp(),
            })
        .then(()=>{
            console.log(`SUCCESS : ORDER ${session.id} has been added to the database!`)
        }).catch(err => console.log(err))
}

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async function handler(req, res){
    const reqBuffer = await buffer(req)
    const payload = reqBuffer.toString()
    const signature = req.headers['stripe-signature']

    let event

    try{
        event = stripe.webhooks.constructEvent(payload, signature, endpointSecret)
    }catch(err){
        return res.status(400).send(`webhook error : ${err.messagd}`)
    }

    if(event.type === 'checkout.session.completed'){
        const session = event.data.object

        return fulfillOrder(session)
                .then(()=> res.status(200))
                .catch(err => res.status(400).send(`webhook error : ${err.message}`))
    }
}

export const config = {
    api : {
        bodyParser : false,
        externalResolver : true,
    },
}
