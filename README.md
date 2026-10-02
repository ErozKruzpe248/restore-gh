# Restore GH — GitHub Pages

Sitio de presentación, soluciones, catálogo y contacto de Restore GH. Incluye 17 páginas y diez fichas de producto.

Dirección prevista: https://erozkruzpe248.github.io/restore-gh/

## Publicación

En Settings → Pages, selecciona **Deploy from a branch**, la rama **main** y la carpeta **/docs**. Guarda la configuración.

`docs/` contiene el sitio listo para publicar. `.nojekyll` permite servir sus archivos directamente. No requiere instalación de dependencias.

## Actualizaciones

Con Node.js 20 o superior:

```sh
npm run build
npm run check
```

Guarda los cambios de `docs/` junto a los cambios de contenido y súbelos a `main`. GitHub Pages actualizará la publicación.

Para usar otro dominio o nombre de repositorio, configura `SITE_URL` con la URL completa antes de generar. El generador adapta las rutas internas, las imágenes, las direcciones canónicas y el sitemap al subdirectorio de publicación.

## Contenido y contacto

Contenido organizado en `content.json` y `build-content.mjs`. Estilos e interacciones en `docs/site.css` y `docs/site.js`. Logotipos proporcionados por el cliente, fotografía de aplicación y documentación del catálogo original de https://restoregh.com/.

El formulario prepara un correo sin almacenamiento ni envío automático. El visitante confirma el envío en su aplicación de correo. Confirmar los datos de contacto y sustituir las composiciones tipográficas por fotografías de los productos cuando estén disponibles.
