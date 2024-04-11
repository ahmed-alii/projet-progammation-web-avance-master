import mongoose from 'mongoose';
import {NextResponse} from 'next/server';

const MONGODB_URI = 'mongodb+srv://root:root@cluster0.qlqke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define the schema for contact form data
const contactSchema = new mongoose.Schema({
    name: {
        type: String,

    }, email: {
        type: String,

    }, message: {
        type: String,

    },
});

// Create a model based on the schema
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Function to save contact form data
async function saveContactFormData(name, email, message) {

    try {
        const newContact = new Contact({
            name, email, message,
        });
        const savedContact = await newContact.save();
        console.log('Contact form data saved successfully:', savedContact);
        return savedContact;
    } catch (error) {
        console.error('Error saving contact form data:', error);
        throw error;
    }
}

// Handler function for the POST method
async function POST(req, res) {
    if (req.method === 'POST') {
        const {name, email, message} = req.body;
        saveContactFormData(name, email, message)
            .then((savedContact) => {
                return NextResponse.json({message: 'Data stored successfully', data: savedContact});
            })
            .catch((error) => {
                return NextResponse.json({message: 'Error storing data', error});
            });
    } else {
        return NextResponse.json({message: 'Method Not Allowed'});
    }
}

// Export the handler function for the POST method
export {POST};
