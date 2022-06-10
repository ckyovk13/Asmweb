const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        Blog: resolve(__dirname, 'Blog.html'),
        Works: resolve(__dirname, 'Works.html'),
        Detail: resolve(__dirname, 'detail.html'),
        
      }
    }
  }
});