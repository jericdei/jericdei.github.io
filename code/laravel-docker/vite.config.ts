import { defineConfig } from 'vite'

export default defineConfig({
    // ... your existing config
+    server: {
+        host: '0.0.0.0',
+        hmr: {
+            host: 'my-project.localhost', // This should be the custom domain we used
+            clientPort: 42069, // This should be the static port on our host
+        },
+    },
})
