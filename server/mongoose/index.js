const Koa = require('koa');
const cors = require('koa2-cors'); 
const {  mongoose } = require('mongoose');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const messageRoute=require('./routes/messageRoute');
const userRoute=require('./routes/userRoute');

//db connection
const connect = async () => {
    try {
      await mongoose.connect(`mongodb+srv://amin:0123@cluster0.yz2oh.mongodb.net/koatest?retryWrites=true&w=majority`);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use(cors()); //to allow all origins
//to recive json data and parse it
app.use(bodyParser());


//to show static files
app.use(static(path.join(__dirname, '../../client')));  

//routes
app.use( messageRoute.routes());
app.use( userRoute.routes());

app.listen( 3000, () => {
    connect();
    console.log('server is running');
    }
);
