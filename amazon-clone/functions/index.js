const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51I0WKCI0fhIMI6yvTGyQo6sN1ENbYoRRSkdL0S7VnlAGA7E1Z4B0Ag74at5ESZFO9r4YQMbR2XtxQsmTCnqyXL6x00QvxE624I');
//api


// app config
const app = express();

//middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//api routes
app.get('/', (request, response) =>response.status(200).send('hello'))

app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;

    console.log('payment request recived for >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',

    });
    response.status(201).send({
     clientSecret: paymentIntent.client_secret,   
    })
})
//listen command
exports.api = functions.https.onRequest(app)