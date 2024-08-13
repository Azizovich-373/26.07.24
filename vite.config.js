// vite.config.js
import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                alltransactions: resolve(__dirname, 'pages/alltransactions/index.html'),
                allwallets: resolve(__dirname, 'pages/allwallets/index.html'),
                signin: resolve(__dirname, 'pages/signin/index.html'),
                signup: resolve(__dirname, 'pages/signup/index.html'),
                transaction: resolve(__dirname, 'pages/transaction/index.html'),
                wallet: resolve(__dirname, 'pages/wallet/index.html'),
                wallet_info: resolve(__dirname, 'pages/wallet_info/index.html'),
            },
        },
    },
})