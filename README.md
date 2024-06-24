# Configuración del Proyecto Ionic coink

## Prerrequisitos

Antes de poder construir y ejecutar el proyecto, necesitas tener instalados los siguientes programas:

1. **Node.js y npm**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Ionic CLI**: Instala la CLI de Ionic globalmente.
3. **Android Studio**: Para simular dispositivos Android y compilar la aplicación.

   ```sh
   npm install -g @ionic/cli
   ```

4. **Ionic**: Agregar la Plataforma Android:

   ```sh
    npx cap add android
   ```

5. **Ionic**: Construir el Proyecto:

   ```sh
   ng build
   ```

6. **Ionic**: Sincronizar con Capacitor:

   ```sh
   ng build
   ```

7. **Ionic**: Abrir el Proyecto en Android Studio:

   ```sh
   npx cap open android

   ```

## Ejecución desde Android Studio

Paso a Paso
Abrir el Proyecto en Android Studio:

Si no has abierto el proyecto con npx cap open android, puedes abrir Android Studio manualmente.
En Android Studio, selecciona File > Open.
Navega hasta el directorio android dentro de tu proyecto Ionic y selecciona Open.
Configurar el Emulador o Dispositivo Físico:

Configura un emulador en Android Studio a través de AVD Manager o conecta un dispositivo físico con depuración USB habilitada.
Seleccionar el Dispositivo de Ejecución:

En la barra de herramientas de Android Studio, elige el dispositivo donde deseas ejecutar la aplicación.
Ejecutar la Aplicación:

Haz clic en el botón de reproducción (Run) en la barra de herramientas de Android Studio.
Android Studio compilará y desplegará la aplicación en el dispositivo seleccionado.
Verificar la Ejecución:

La aplicación se abrirá automáticamente en el emulador o dispositivo físico.
Puedes interactuar con la aplicación como lo harías en un dispositivo real.

## APK

Se encientra en la carpeta: android > app > coink.apk
