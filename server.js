const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'ferrosero91@gmail.com',
        pass: process.env.EMAIL_PASSWORD // Set this in environment variables
    }
});

// Email template
const createEmailTemplate = (data) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Asunto:</strong> ${data.subject}</p>
                <p><strong>Mensaje:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
            <p style="color: #6b7280; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
            </p>
        </div>
    `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Todos los campos son requeridos'
            });
        }

        // Email options
        const mailOptions = {
            from: 'ferrosero91@gmail.com',
            to: 'ferrosero91@gmail.com',
            subject: `Nuevo mensaje de contacto: ${subject}`,
            html: createEmailTemplate({ name, email, subject, message }),
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({
            success: true,
            message: 'Mensaje enviado exitosamente'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Error al enviar el mensaje'
        });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 