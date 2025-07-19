# Configuración de EmailJS para el Formulario de Contacto

## 🚀 Opción 1: EmailJS (Recomendado)

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu cuenta de Gmail
- Obtén tu **Public Key**

### 2. Configurar EmailJS en el Portfolio

Agrega este script en el `<head>` de `public/index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### 3. Actualizar la función sendEmail

Reemplaza la función `sendEmail` en el JavaScript con:

```javascript
// Inicializar EmailJS
emailjs.init("TU_PUBLIC_KEY_AQUI");

async function sendEmail(data) {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: 'ferrosero91@gmail.com'
        };

        const response = await emailjs.send(
            'TU_SERVICE_ID', // Gmail
            'TU_TEMPLATE_ID', // Template de EmailJS
            templateParams
        );

        return { success: true, message: 'Mensaje enviado exitosamente' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error al enviar el mensaje');
    }
}
```

### 4. Configurar en EmailJS Dashboard
- **Service**: Gmail
- **Template**: Crear template con variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

---

## 🚀 Opción 2: Formspree (Alternativa)

### 1. Crear cuenta en Formspree
- Ve a [https://formspree.io/](https://formspree.io/)
- Crea un nuevo formulario
- Obtén tu **Endpoint URL**

### 2. Actualizar el formulario HTML

Cambia el formulario en `public/index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/TU_FORM_ID" method="POST">
    <div class="form-group">
        <label for="name">Nombre completo</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="subject">Asunto</label>
        <input type="text" id="subject" name="subject" required>
    </div>
    
    <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    
    <button type="submit" class="submit-btn">
        <i class="fas fa-paper-plane"></i>
        Enviar Mensaje
    </button>
</form>
```

---

## 🚀 Opción 3: Netlify Forms (Si usas Netlify)

### 1. Configurar en Netlify
- El formulario funcionará automáticamente
- Los emails se envían a tu email configurado en Netlify

### 2. Agregar atributos al formulario

```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- resto del formulario igual -->
</form>
```

---

## 📧 Configuración Actual

Por ahora, el formulario simula el envío para una mejor experiencia de usuario. Los datos se muestran en la consola del navegador.

Para implementar cualquiera de las opciones anteriores, simplemente sigue las instrucciones correspondientes. 