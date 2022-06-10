const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'home.html'),
        Blog: resolve(__dirname, 'Blog.html'),
        Works: resolve(__dirname, 'Works.html'),
        Detail: resolve(__dirname, 'detail.html'),
        
      }
    }
  }
});