import express from 'express';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/' , Router);


app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
        res.status(500).send(err);
}
        );
});

const PORT = process.env.PORT;
app.listen(PORT , ()=> console.log(`server is running successfully on port ${PORT}`));

Connection();
