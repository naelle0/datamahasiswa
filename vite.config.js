export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/resource/js",
        },
    },
    build: {
        outDir: 'dist', // Pastikan output directory adalah 'dist'
    },
});

