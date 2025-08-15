// Importing Express 
import express, { json } from 'express'
// import { getDB } from './db.js'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import { getDb } from './db.js'

// how to read th db.json
// file pathing issue

const __filename= fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dbPath = path.join(__dirname,'db.json')
console.log(dbPath);


// !express...
const app = express()

// const db = {
//     "products": [
//         {
//             "productID":1,
//             "name": "Galaxy Slippers",
//             "productNumber": "hl-1234-0",
//             "color": "blue",
//             "standardCost": 3.50,
//             "price": 13.99,
//             "image": "./images/blueslip.webp",
//             "description": "Magnificant Blue Sparkle slippers (Sizes 0-6) Look like a princess in these glam slippers ",
//             "tags": ["shoes", "slipper", "sparkle"]
//         },
//         {
//             "productID":2,
//             "name": "Galaxy Slippers",
//             "productNumber": "hl-1234-0",
//             "color": "red",
//             "standardCost": 3.50,
//             "price": 13.99,
//             "image": "./images/blueslip.webp",
//             "description": "Magnificant Blue Sparkle slippers (Sizes 0-6) Look like a princess in these glam slippers ",
//             "tags": [ "slipper", "sparkle"]
//         }
//     ]
// }
app.use(cors())

// GET Route
app.get('/', async (req, res) => {// req is user asking response from server
    // res.send('Welcome to Giirrlly"s server')
    const db = await getDb(dbPath)
    //  .send or .json can be used here. .Send converts it to a json(or any type)in this case a json 
    res.status(200).send(JSON.parse(db)) //turning into a js obj
});

// (req)allows api user to specifify what they want to search for
app.get('/:products',async(req,res)=>{
console.log(req.params);
const {products} = req.params
console.log(products);
//  How to search the database 
// 1. Grab the Database (db)
const db = await getDb(dbPath)
console.log(db);

// 2.. Do something with the data
// 
})

//  The end call here localhost:3000/products will return only the object with the color red(or any other aspect decided)
app.get('/products', async (req,res)=>{

    const dbz = await get(dbPath)

    const filteredData = JSON.parse(dbz).data.filter(saleitem =>saleitem.color === "red")
    res.status(200).send(filteredData)
})

// Creating webserver to listen on the specified port
const port = 3000
app.listen(port, (req, res) => {
    console.log(`Your server is on http://localhost:${port}`);
})


