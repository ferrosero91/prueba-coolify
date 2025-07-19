# Portfolio Profesional - Fernando Rosero

Un portfolio moderno y profesional desarrollado con tecnologías web modernas, diseñado para mostrar habilidades y proyectos de desarrollo Full Stack.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con efectos visuales profesionales
- **Responsive**: Optimizado para todos los dispositivos
- **Interactivo**: Animaciones suaves y transiciones estilo React
- **Botón de WhatsApp**: Contacto directo vía WhatsApp (+57 311 709 8269)
- **Formulario de Contacto**: Preparado para integración con EmailJS/Formspree
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome para iconos
- Google Fonts (Inter)
- Animaciones CSS y JavaScript

### Deployment
- Docker containerization con Nginx
- Coolify deployment ready
- Puerto 8001

## 📦 Instalación

### Prerrequisitos
- Docker (opcional)
- Cuenta de EmailJS o Formspree para formulario de contacto

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd prueba-coolify
```

2. **Ejecutar con Docker**
```bash
docker build -t fernando-portfolio .
docker run -p 8001:8001 fernando-portfolio
```

3. **O ejecutar directamente**
```bash
# Instalar un servidor local simple
npm install -g http-server
cd public
http-server -p 8001
```

## 🔧 Configuración del Formulario de Contacto

### Opción 1: EmailJS (Recomendado)
1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio Gmail
3. Crear template de email
4. Seguir instrucciones en `EMAIL_SETUP.md`

### Opción 2: Formspree
1. Crear cuenta en [Formspree](https://formspree.io/)
2. Obtener endpoint URL
3. Actualizar formulario HTML
4. Ver `EMAIL_SETUP.md` para detalles

## 📱 Características del Portfolio

### Secciones Principales
- **Hero Section**: Presentación impactante con CTA
- **Acerca de**: Información personal y experiencia
- **Habilidades**: Grid de tecnologías organizadas por categorías
- **Proyectos**: Portfolio de trabajos destacados
- **Contacto**: Formulario + WhatsApp + información de contacto

### Funcionalidades Interactivas
- Navegación suave entre secciones
- Animaciones de entrada
- Efectos hover en tarjetas
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
   - Build command: `docker build -t .`
   - Start command: `docker run -p 8001:8001 .`

3. **Variables de entorno** (opcional):
   ```
   # Solo si usas backend personalizado
   EMAIL_PASSWORD=tu_contraseña_de_aplicacion
   ```

## 📊 Estructura del Proyecto

```
prueba-coolify/
├── public/
│   └── index.html          # Frontend principal
├── .docker/
│   └── nginx.conf          # Configuración Nginx
├── Dockerfile              # Configuración Docker
├── docker-compose.yaml     # Orquestación Docker
├── EMAIL_SETUP.md          # Guía configuración email
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

- Validación de formularios en frontend
- Headers de seguridad en Nginx
- Configuración CORS apropiada

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