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

## Ajustes de Fase 1 — 4 de octubre de 2026

- Fichas con orientación para elegir y datos que compartir al solicitar asesoría; presentaciones normalizadas desde el catálogo original.
- Recomendaciones de productos de la misma categoría. Las categorías sin alternativas dirigen a Soluciones.
- Contacto directo por llamada o correo y explicación visible del envío manual del mensaje preparado.
- Fotografía principal WebP de 204 KB (original de 2.9 MB), metadatos para compartir y jerarquía del catálogo corregida.
- Verificadas 17 páginas, 466 referencias locales y disponibilidad de los 13 PDF externos. La disponibilidad no confirma vigencia documental ni certificaciones adicionales.
- Revisadas portada en escritorio, ficha en tablet, contacto y navegación en móvil, búsqueda sin acentos y preparación local de mensajes.

Pendiente del cliente: confirmar teléfono/correo y recepción real, presentaciones vigentes, documentos aprobados y fotografías de envases/aplicaciones. El envío automático requiere seleccionar y configurar un servicio receptor; no está activado.
