import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//import path from "path"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import ViteComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { getThemeVariables } from 'ant-design-vue/dist/theme'
//import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importLess: true
        })
      ]
    }),
    //vitePluginImp({
    //  libList: [
    //    {
    //      libName: '',
    //      //style: () => `ant-design-vue/es/style/css.js`,
    //      //style: (name) => `${resolve("src/style/config.less")}"`
    //    },
    //  ],
    //}),
  ],
  resolve: {
    //alias: {
    //  '@': fileURLToPath(new URL('./src', import.meta.url))
    //}
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    //alias: [
    //  {
    //    find: "@",
    //    replacement: path.resolve(__dirname, "src")
    //  }
    //]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          ...getThemeVariables( {
            dark: true,
            //compact: true,
          } ),
          'primary-color': '#1DA57A',
          //'heading-color': '#f00',
          //'popover-background': "red",
          'layout-header-height': '100px',
          'layout-header-background': 'transparent',
          //'layout-body-background': '#141414',
          //'hack': `true;@import (reference) "${resolve(__dirname, 'src/style/config.less')}";`,
          //'hack': `true;@import "${require.resolve('ant-design-vue/lib/style/color/colorPalette.less')}";`,
        },
        //additionalData: '@root-entry-name: default;'
      }
    }
  }
})
