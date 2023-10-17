const express=require('express');
const cors=require('cors');
const app = express();
const port=process.env.PORT ||5000;
// ------------MIddle ware------------
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('ph cofee making server')
})
app.listen(port,()=>{
    console.log(`phtechnology is run port:${port}`)
})



// hSaBGixklK1qjDQn