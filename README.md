# 📁 Projects Management

**Projects Management** es una aplicación web desarrollada con Spring Boot que permite gestionar proyectos, usuarios y comunicaciones internas mediante un sistema de correos electrónicos. Diseñada para equipos de desarrollo y entornos educativos, esta herramienta facilita la organización y seguimiento de tareas y mensajes entre usuarios.

## 🚀 Características

- **Gestión de Proyectos**: Crea, actualiza y elimina proyectos con facilidad.
- **Administración de Usuarios**: Registra y gestiona usuarios asociados a proyectos.
- **API RESTful**: Endpoints claros y estructurados para interactuar con la aplicación.
- **Integración con Frontend**: Compatible con aplicaciones frontend como React para una experiencia de usuario completa.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Java 17, Spring Boot, Spring Data JPA
- **Base de Datos**: MySQL
- **ORM**: Hibernate
- **Control de Versiones**: Git
- **Herramientas de Desarrollo**: Maven, Lombok

## 📦 Estructura del Proyecto

projects-management/ 
<br>├── src/
<br>├── main/ 
<br>├── java/ 
<br>│ └── com.flavio.api/ 
<br>│          ├── controllers/ 
<br>│          ├── models/ 
<br>│          ├── repositories/ 
<br>│          └── services/ 
<br>├── resources/ 
<br>├── application.properties 
<br>├── pom.xml
<br>└── README.md

## 🔧 Configuración y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/flaviomelian/projects-management.git
   cd projects-management
Configurar la base de datos:

Asegúrate de tener una base de datos MySQL en funcionamiento y actualiza el archivo application.properties con tus credenciales:

### properties<br>
spring.datasource.url=jdbc:mysql://localhost:3306/tu_base_de_datos
<br>spring.datasource.username=tu_usuario
<br>spring.datasource.password=tu_contraseña

### Construir y ejecutar la aplicación:

<u>Backend:</u>
```bash
mvn clean install
mvn spring-boot:run
```
El backend estará disponible en http://localhost:8080
<br><u>Frontend:</u>
```bash
cd frontend/src
npm run dev
```
El frontend estará disponible en http://localhost:5173

Para acceder a la documentación de la api, una vez levantado Spring, basta con acceder a http://localhost:8080/swagger-ui/index.html

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

Haz un fork del repositorio.

Crea una nueva rama: git checkout -b feature/nueva-funcionalidad.

Realiza tus cambios y haz commit: git commit -m 'Agrega nueva funcionalidad'.

Sube tus cambios: git push origin feature/nueva-funcionalidad.

Abre un Pull Request.

## 📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## 👨‍💻 Autor
Desarrollado por Flavio Melián, estudiante del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma en IES El Rincón.
