# 🧱 M3AE5 – ABPRO5: Bootstrap y SASS 

Este proyecto forma parte del módulo de desarrollo frontend en el bootcamp Talento Digital. El objetivo principal es:

- Aplicar el **modelo de cajas (Box Model)** de CSS.
- Construir un **layout responsivo** con **Bootstrap 5**.
- Modularizar y organizar los estilos con **SASS** siguiendo el **patrón 7-1**.

## 🎯 Aprendizaje Esperado

> Implementar una arquitectura de estilos clara y escalable combinando Box Model, Bootstrap y SASS.

---

## 📐 Requerimientos del Proyecto

### 🧩 Estructura General

- **Contenedor Principal**:
  - Ancho: 80% de la ventana.
  - Centrado horizontal (`margin: auto`).
  - Borde: 1px color gris claro.
  - Padding interno: 20px.
  - Margin externo para separación de bordes.
- **Modelo de Caja**: cada elemento debe definir explícitamente `margin`, `border`, `padding` y `width`.
- **Bootstrap**:
  - Navbar fija con menú hamburguesa en mobile/tablet.
  - Carousel de imágenes.
  - Sección de productos con cards (imagen, título, descripción, botón).
  - Modal o alerta al enviar el formulario con el mensaje “Guardado exitosamente”.
- **SASS (Patrón 7-1)**:
  - Variables globales en `abstracts/_variables.scss`.
  - Mixins reutilizables en `abstracts/_mixins.scss`.
  - Overrides de Bootstrap en `vendors/_bootstrap-custom.scss`.
  - Módulos para base, layout, components y pages.

### 🖼️ Header

- Ancho: 100%.
- Padding: 10px.
- Fondo sólido.
- Navbar fija en el top.

### 🖼️ Sección de Productos

- 12 productos con imagen, título, descripción y botón.
- Grid responsivo:
  - 4 columnas en desktop.
  - Adaptable en tablets y móviles.

### 📦 Footer

- Altura: 100px.
- Padding: 20px.
- Fondo contrastante.
- Margin-top: 50px.
- Íconos de redes sociales alineados a la derecha.

### 📝 Formulario de Contacto

- Campos: Nombre, Apellido, Mensaje.
- Estilos con Bootstrap y SASS.

### 🔘 Botones

- Padding interno.
- Espaciado con `margin`.
- Border-radius.
- Efecto `hover`.

### 📱 Responsividad

- Uso de clases de Bootstrap y mixins de SASS para media queries.

---

## 🌐 Modularización con SASS (Patrón 7-1)

```
assets/scss/
├── abstracts/      // Variables, mixins, funciones
├── base/           // Reset, tipografía
├── components/     // Botones, cards, form, carousel
├── layout/         // Header, footer
├── pages/          // Estilos por sección
├── themes/         // Temas opcionales
├── vendors/        // Overrides de Bootstrap
└── style.scss      // Punto de entrada
```

- Variables globales en `abstracts/_variables.scss`.
- Mixins en `abstracts/_mixins.scss`.
- Bootstrap override en `vendors/_bootstrap-custom.scss`.

---

## 💻 Tecnologías

- HTML5
- CSS3
- Bootstrap 5
- SASS (Dart Sass)
- JavaScript (Bootstrap Bundle)
- Node.js & npm (solo para compilación de SASS)

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/soyNelsonValenzuela/M3AE5_ABPRO5.git
cd M3AE5_ABPRO5

# Instalar dependencias
npm install

# Compilar SASS una vez
npm run build:sass

# Modo watch (recompila al guardar)
npm run watch:sass

# Abrir index.html en tu navegador
```

**Scripts en package.json**:
```json
"scripts": {
  "build:sass": "sass --load-path=node_modules assets/css/sass/style.scss assets/css/style.css",
  "watch:sass": "sass --load-path=node_modules --watch assets/css/sass:assets/css"
}
```

---

## 🧑‍💻 Autor

**Nelson Valenzuela**  
[GitHub](https://github.com/soyNelsonValenzuela)

---