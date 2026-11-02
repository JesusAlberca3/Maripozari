# Maripozari — contexto de marca para Cursor

Usa este archivo cada vez que pidas un componente, sección o texto nuevo. La tienda no debe competir visualmente con las blind box: el marco es austero para que el producto sea el color.

## Sobre la marca

Maripozari es una tienda de **blind box y figuras coleccionables**, especialmente Hirono, Pop Mart y otras líneas de diseño asiático. La identidad se inspira en el **misterio**, la **naturaleza** y la **cultura visual japonesa**. El coleccionismo se plantea como una experiencia cercana, personal y emocional — no como un catálogo ruidoso.

Público: personas que valoran objetos únicos, ediciones especiales y diseños con identidad.

Tono: cercano, misterioso, coleccionable. Frases cortas. Sin mayúsculas agresivas ni exclamaciones de outlet. El misterio se sugiere; no se explica de más.

Instagram en aplicaciones oficiales: [@maripo.zari](https://instagram.com/maripo.zari)

## Color — paleta

El marco sigue siendo blanco, negro y gris. El header es negro para separarlo de la página. Un verde de hoja seca se usa solo como detalle (franja, números, fondos muy claros), nunca como color de botón ni de texto largo.

| Token        | Hex       | RGB         | Uso                                      |
| ------------ | --------- | ----------- | ---------------------------------------- |
| `--color-ink`   | `#000000` | `0, 0, 0`       | Texto, logo sobre blanco, botones, bordes |
| `--color-paper` | `#FFFFFF` | `255, 255, 255` | Fondo de tienda, botones inversos        |
| `--color-ash`   | `#636363` | `99, 99, 99`    | Detalles secundarios, captions, hints    |
| `--color-leaf`  | `#3C4A34` | `60, 74, 52`    | Números, estrellas, línea bajo el header |
| `--color-leaf-paper` | `#F3F5EE` | `243, 245, 238` | Fondo detrás de las tarjetas de accesos. No va bajo párrafos. |

En CSS del tema viven como:

```css
:root {
  --color-ink: 0, 0, 0;
  --color-paper: 255, 255, 255;
  --color-ash: 99, 99, 99;
  --color-leaf: 60, 74, 52;
  --color-leaf-paper: 243, 245, 238;
}
```

Fondo blanco, texto negro. El header es la excepción: fondo negro, texto e iconos blancos. El gris es para lo secundario. El verde no pinta botones ni párrafos.

## Tipografía

- **Cuerpo y UI:** [Lexend](https://fonts.google.com/specimen/Lexend) (Google Font, OFL). Párrafos, navegación, precios, botones, headings pequeños (`h2`–`h6`).
- **Títulos grandes:** handwritten. Solo `h0`, héroes, 404, vacíos, display. Nunca en párrafos.

### Comico — no está licenciada para web

Comico (Don Marciano) es la handwritten del manual. **No está en Google Fonts.** La versión gratuita es solo uso personal; incrustarla con `@font-face` en la tienda requiere licencia comercial / webfont (Payhip o Creative Market).

Las carpetas de Drive del PDF (“Click para descargar”) no son públicas, así que no pudimos revisar el archivo `.woff2` ni la licencia que tengan. **No embebimos Comico.**

Sustituto actual (OFL, Google Fonts): **Gaegu**. Misma función: cercanía, trazo irregular, solo en títulos grandes.

Cuando tengan licencia web de Comico:

1. Subir `Comico.woff2` a `assets/`.
2. En `assets/maripozari.css`, cambiar `--font-display-family` a `'Comico', 'Gaegu', cursive`.
3. Añadir el `@font-face` correspondiente.

## Logo

Tres versiones oficiales (extraídas del manual, páginas 8–11):

| Archivo                     | Uso                                                          |
| --------------------------- | ------------------------------------------------------------ |
| `assets/logo-symbol.png`    | Favicon y espacios pequeños sobre blanco                     |
| `assets/logo-horizontal.png`| Lockup negro. No va en el header                             |
| `assets/logo-horizontal-white.png` | Header **escritorio** (fondo negro)                   |
| `assets/logo-original.png`  | Versión principal: símbolo + wordmark arqueado. Héroes, about |
| `assets/logo-symbol-white.png` | Header **móvil** y cualquier fondo negro                 |

El símbolo es el personaje de línea + el kanji **蝶** (mariposa) dentro del círculo. No redibujarlo ni recolorarlo. No poner el lockup horizontal en móvil.

Si el merchant sube un logo en el editor de Shopify, ese archivo sustituye el lockup de escritorio. El símbolo móvil se puede subir en **Logo móvil**.

## Textura kraft / papel

`assets/texture-kraft.png` — fibra de papel en gris cálido, no kraft marrón saturado (así no rompe la paleta).

Usarla **con moderación**:

- Fondo de la sección “Sobre la marca”
- Separador de colección

No como fondo de toda la tienda ni detrás de grillas de producto (mata la legibilidad del catálogo).

## Ilustraciones de criaturas

Línea simple, mismo espíritu del logo. Universo de bosque / misterio (stickers del manual).

| Archivo                         | Uso previsto                         |
| ------------------------------- | ------------------------------------ |
| `assets/creature-404.png`       | Página 404 (sombrero de paja)        |
| `assets/creature-empty-cart.png`| Carrito vacío (hongo)                |
| `assets/creature-surprise.png`  | Badge “Sorpresa” en blind box        |

Sirven para estados vacíos y para el misterio de la caja, no como decoración repetida en cada sección.

El badge aparece en tarjetas de producto si el producto tiene tag `blind-box`, `blindbox` o `sorpresa`, o si el título/tipo contiene “blind”. En ajustes se puede mostrar en todos los productos.

## Qué no hacer

- No pintar botones ni párrafos de verde. La hoja seca es solo detalle.
- No usar handwritten en body, precios ni menús.
- No poner la textura kraft detrás del catálogo.
- No volver el header a blanco: la barra negra separa el menú de la página.
- No competir con el empaque de las figuras.

## Flujo de trabajo (Cursor + GitHub + Shopify)

Ver [README.md](README.md). Resumen: desarrollar en una rama que no esté publicada, `shopify theme dev` en local, conectar esa rama desde **Tienda online → Temas → Agregar tema → Conectar desde GitHub**, y publicar solo cuando el push se vea bien.
