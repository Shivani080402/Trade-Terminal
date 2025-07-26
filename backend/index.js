require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingModel} = require('./model/HoldingModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const { Signup, Login } = require('./Controller/AuthController');
const {userVerfication} = require("./Middelware/AuthMiddelware");
const cookieParser = require('cookie-parser');

const PORT  = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;


const app = express();

app.use(cors({
    origin: ["http://localhost:3000",'http://localhost:3001' ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));



app.use(bodyParser.json());

// app.get('/addPositions' , async(req , res) => {
//     let tempPositions  = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];

// tempPositions.forEach((item) =>{
//     let newPosition = new PositionsModel(
//         {
    
//      product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net:item.net,
//         day: item.day,
//         isLoss: item.isLoss, 
// }
//     );

//     newPosition.save();


// });
// res.send("Done position");
// })


app.get('/allHoldings' , async(req , res) => {
    let allholding = await HoldingModel.find({});

    res.json(allholding);
});

app.get('/allPosition' , async(req , res) => {
    let allPosition = await PositionsModel.find({});

    res.json(allPosition);
});

app.get('/allOrder' , async(req , res) => {
    let allOrder = await OrdersModel.find({});

    res.json(allOrder);
});

app.post('/newOrder' , async(req , res) => {
    let newOrder = new OrdersModel(
        {
            
    name: req.body.name,
    qty:  req.body.qty,
    price:  req.body.price,
    mode :  req.body.mode,
        }
    );

    newOrder.save();
    res.send("Order saved!");

})

 app.use(cookieParser());
 app.use(express.json());
    app.post('/signup' , Signup
);

app.post('/login' , Login);

app.post('/', userVerfication);


app.listen(PORT , () => {
    console.log("App Started");
    mongoose.connect(URI);
    console.log("DB Connected");
})