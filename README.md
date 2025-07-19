# Portfolio Profesional - Fernando Rosero

Un portfolio moderno y profesional desarrollado con tecnologías web modernas, diseñado para mostrar habilidades y proyectos de desarrollo Full Stack.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con efectos visuales profesionales
- **Responsive**: Optimizado para todos los dispositivos
- **Interactivo**: Animaciones suaves y transiciones estilo React
- **Formulario de Contacto Funcional**: Envío de emails reales
- **Botón de WhatsApp**: Contacto directo vía WhatsApp
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome para iconos
- Google Fonts (Inter)
- Animaciones CSS y JavaScript

### Backend
- Node.js con Express
- Nodemailer para envío de emails
- CORS habilitado

### Deployment
- Docker containerization
- Coolify deployment ready
- Puerto 8001

## 📦 Instalación

### Prerrequisitos
- Node.js 14+ 
- Docker (opcional)
- Cuenta de Gmail para envío de emails

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd prueba-coolify
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env
echo "EMAIL_PASSWORD=tu_contraseña_de_aplicacion" > .env
```

4. **Configurar Gmail**
   - Habilitar autenticación de 2 factores en tu cuenta Gmail
   - Generar una contraseña de aplicación
   - Usar esa contraseña en la variable EMAIL_PASSWORD

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

6. **Ejecutar en producción**
```bash
npm start
```

### Configuración con Docker

1. **Construir la imagen**
```bash
docker build -t fernando-portfolio .
```

2. **Ejecutar el contenedor**
```bash
docker run -p 8001:8001 -e EMAIL_PASSWORD=tu_contraseña fernando-portfolio
```

## 🔧 Configuración de Email

Para que el formulario de contacto funcione correctamente:

1. **Gmail Setup**:
   - Ve a tu cuenta de Google
   - Activa la verificación en 2 pasos
   - Genera una contraseña de aplicación
   - Usa esa contraseña en la variable de entorno

2. **Variables de Entorno**:
   ```bash
   EMAIL_PASSWORD=tu_contraseña_de_aplicacion
   ```

## 📱 Características del Portfolio

### Secciones Principales
- **Hero Section**: Presentación impactante con CTA
- **Acerca de**: Información personal y experiencia
- **Habilidades**: Grid de tecnologías organizadas por categorías
- **Proyectos**: Portfolio de trabajos destacados
- **Contacto**: Formulario funcional + WhatsApp

### Funcionalidades Interactivas
- Navegación suave entre secciones
- Animaciones de entrada
- Efectos hover en tarjetas
- Formulario de contacto con validación
- Botón de WhatsApp flotante
- Loader de carga inicial

### Diseño Responsive
- Mobile-first approach
- Breakpoints optimizados
- Navegación adaptativa
- Elementos táctiles optimizados

## 🚀 Deployment en Coolify

1. **Preparar el repositorio**:
   - Asegúrate de que todos los archivos estén commitados
   - El Dockerfile está configurado para Coolify

2. **Configurar en Coolify**:
   - Puerto: 8001
   - Variables de entorno: EMAIL_PASSWORD
   - Build command: `npm ci --only=production`
   - Start command: `npm start`

3. **Variables de entorno en Coolify**:
   ```
   EMAIL_PASSWORD=tu_contraseña_de_aplicacion
   ```

## 📊 Estructura del Proyecto

```
prueba-coolify/
├── public/
│   └── index.html          # Frontend principal
├── server.js               # Backend Node.js
├── package.json            # Dependencias
├── Dockerfile              # Configuración Docker
├── docker-compose.yaml     # Orquestación Docker
├── .docker/
│   └── nginx.conf          # Config Nginx (legacy)
└── README.md               # Documentación
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en CSS variables:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
}
```

### Contenido
- Edita `public/index.html` para cambiar el contenido
- Modifica las secciones según tus necesidades
- Actualiza proyectos y habilidades

### Estilos
- Los estilos están en el mismo archivo HTML
- Usa CSS variables para cambios rápidos
- Responsive design incluido

## 🔒 Seguridad

- Variables de entorno para credenciales
- Validación de formularios
- CORS configurado
- Usuario no-root en Docker
- Headers de seguridad

## 📈 Performance

- CSS y JS optimizados
- Imágenes optimizadas
- Lazy loading implementado
- Compresión gzip
- Cache headers

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: ferrosero91@gmail.com
- **WhatsApp**: +57 311 709 8269
- **Portfolio**: [Tu URL del portfolio]

---

Desarrollado con ❤️ por Fernando Rosero 