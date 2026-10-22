import { defineConfig } from 'vite';

export default defineConfig({
    base: "/Exercise_GitHub_Branches/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html'
            },
        },
    },
});