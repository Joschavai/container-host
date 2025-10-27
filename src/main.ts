import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue"; //Our .vue startup file
import './style.css'
import "./static/global.css"; //Import css files as modules
const ContentView = defineAsyncComponent(() => import("contentView/App"));


const app = createApp(App);
app.component('ContentView', ContentView);

app.mount("#app");
