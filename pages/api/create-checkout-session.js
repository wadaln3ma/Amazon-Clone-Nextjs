const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const handler = async(req, res)=>{

    const { products, email } = req.body
    
    console.log(email)
    console.log(products)


    const transformedItems = Object.values(products).map(item => ({
        description : item.description,
        quantity : 1,
        price_data : {
            currency: "aed",
            unit_amount : item.price * 100,
            product_data: {
                name : item.title,
                images : [item.images],
            },
        },
    }))
    
    console.log(transformedItems)


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1KPGukK3wq9Dt87tnBRD8bNB"],
        shipping_address_collection: {
            allowed_countries: ["AE", "SN", "SA","GB", "US", "CA", "FR"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(products.map((item)=> item.image)),
        },
    })

    //console.log(session.id)

    res.status(200).json({ id: session.id });
        
}

export default handler
