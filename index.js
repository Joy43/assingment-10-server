
const express=require('express');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const cors=require('cors');
const app = express();
const port=process.env.PORT ||5000;
// ------------MIddle ware------------
app.use(cors());
app.use(express.json());
// ----------------




// iQBam6yGirpJRAnI
// joy370
// --------------mongo db -----------------







// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ydqdwos.mongodb.net/?retryWrites=true&w=majority`;



const uri = "mongodb+srv://joy370:iQBam6yGirpJRAnI@cluster0.jxz2tww.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();



    // ------------connect database and access----------
const PhoneCollection=client.db('PhonesallDB').collection('phonesall');

// ----------get method---------
app.get('/phone',async(req,res)=>{
  const cursor=PhoneCollection.find();
  const result=await cursor.toArray();
  res.send(result);
})

// ---------
app.get('/phone/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=await PhoneCollection.findOne(query);
  res.send(result);
})


//------------- post method---------

// --------post form data------------------
app.post('/phone',async(req,res)=>{
  const newPhone=req.body;
  console.log(newPhone)
  const result=await PhoneCollection.insertOne(newPhone);
  res.send(result);
})


//--------------- update put------------

app.put('/phone/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId (_id)};
  const options = { upsert: true };
  const updatePhone = req.body;
  const phone = {
    $set: {
      name: updatePhone.name,
      bandname: updatePhone.bandname,
      price: updatePhone.price,
      rating: updatePhone.rating,
      category: updatePhone.category,
      description: updatePhone.description,
      photo: updatePhone.photo,
    },
  };

  const result = await PhoneCollection.updateOne(filter, phone, options);
  res.send(result);
});


// ===============delete opration=======================
app.delete('/phone/:id', async(req,res)=>{
  const id=req.params.id;
  const query={_id: new ObjectId(id)}
  const result =await PhoneCollection.deleteOne(query)
  res.send(result);
})



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   

  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('phone making server is running')
})

app.listen(port, () => {
  console.log(`phone Server is running on port: ${port}`)
})





