// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  //const body = JSON.parse(req.body)

  const name = req.body.name

  //const msg = `hello ${name}...`

//console.log(msg)

  const passed = {msg :' msg'}

  res.send({ key : "hello" })
}
