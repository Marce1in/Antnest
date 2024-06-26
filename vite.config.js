import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Antnest/",
    resolve: {
        alias: {
            '@tabela': path.resolve(__dirname, './src/helpers/tabela.js'),
            '@useTabela': path.resolve(__dirname, './src/helpers/useTabela.js'),
            '@sessao': path.resolve(__dirname, './src/helpers/sessao.js')
        }
    }
})
