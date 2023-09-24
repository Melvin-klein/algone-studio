import { defineConfig } from 'electron-vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
    main: {
        build: {
            outDir: './build/main',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'desktop/main/index.ts')
                }
            }
        }
    },
    preload: {
        build: {
            outDir: './build/preload',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'desktop/preload/index.ts')
                }
            }
        }
    },
    renderer: {
        root: '.',
        build: {
            outDir: './build/renderer',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html')
                }
            }
        },
        plugins: [react()],
    }
})
