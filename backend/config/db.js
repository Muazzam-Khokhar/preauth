import mongoose from 'mongoose'
import color from 'colors'

var mongoURL = 'mongodb+srv://preauth:PreAuth%40987!@preauth.oi5fupq.mongodb.net/';


const connectDB = async()=> {
    try {
        const conn = await mongoose.connect(mongoURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
          
           // userCreateIndex: true,
        })
        mongoose.set("strictQuery", false);

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch(error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB