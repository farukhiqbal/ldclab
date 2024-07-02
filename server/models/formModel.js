import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const formDataSchema = new Schema({
    firstName: String,
    number: String,
    city: String,
    
});

export default model('FormData', formDataSchema);
