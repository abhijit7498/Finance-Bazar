// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Twilio Config
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

// In-memory OTP storage (You should use a database like Redis for production)
const otpStore = {};

// Helper: Generate 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP Endpoint
app.post('/send-otp', async (req, res) => {
    try {
        const { mobile, method = "sms" } = req.body;

        if (!mobile) {
            return res.status(400).json({ success: false, message: 'Mobile number is required.' });
        }

        // Mobile format check
        if (!/^\+?[1-9]\d{7,14}$/.test(mobile)) {
            return res.status(400).json({ success: false, message: 'Invalid mobile number format.' });
        }

        const otp = generateOtp();
        otpStore[mobile] = otp;

        const messageBody = `Hello! Your OTP for Finances Bazar is ${otp}.`;

        if (method === "whatsapp") {
            await twilioClient.messages.create({
                body: messageBody,
                from: `whatsapp:${TWILIO_PHONE_NUMBER}`,
                to: `whatsapp:${mobile}`,
            });
        } else if (method === "call") {
            await twilioClient.calls.create({
                twiml: `<Response><Say>Your verification code is ${otp}</Say></Response>`,
                from: TWILIO_PHONE_NUMBER,
                to: mobile,
            });
        } else {
            await twilioClient.messages.create({
                body: messageBody,
                from: TWILIO_PHONE_NUMBER,
                to: mobile,
            });
        }

        console.log(`OTP ${otp} sent to ${mobile} via ${method}`);
        res.json({ success: true, message: `OTP sent via ${method}.` });

    } catch (error) {
        console.error('Error sending OTP:', error.message);
        res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
    }
});

// Verify OTP Endpoint
app.post('/verify-otp', (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({ success: false, message: 'Mobile number and OTP are required.' });
        }

        const storedOtp = otpStore[mobile];

        if (!storedOtp) {
            return res.status(400).json({ success: false, message: 'No OTP sent to this number.' });
        }

        if (storedOtp !== otp) {
            return res.status(400).json({ success: false, message: 'Invalid OTP.' });
        }

        // OTP is correct - Optionally delete it after verification
        delete otpStore[mobile];

        return res.json({ success: true, message: 'OTP verified successfully.' });

    } catch (error) {
        console.error('Error verifying OTP:', error.message);
        res.status(500).json({ success: false, message: 'Failed to verify OTP.' });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('OTP Backend is running.');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
