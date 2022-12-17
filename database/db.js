import mongoose from "mongoose";

const Connection=async()=>{
    
const URL = `mongodb+srv://user:TG6ZkfwjoEkokhbs@cluster0.urtrghm.mongodb.net/?retryWrites=true&w=majority`;
try{

await mongoose.connect(URL , {useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex:true})
console.log('Connection successful with database')
 } catch(error){
     console.log(`Error while connecting to Mongodb , ${error}`)
}
}


export default Connection;
