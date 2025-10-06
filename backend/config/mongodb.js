import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    })

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    })

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'e-commerce'
        })
        console.log('Attempting to connect to MongoDB...');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

export default connectDB;
