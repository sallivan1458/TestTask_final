import {createRoot} from "react-dom/client";
import {App} from "./App";
import "./App.module.scss"
import {Provider} from "react-redux";
import  store  from "./store";


const root = document.getElementById("root")!

const container = createRoot(root)

container.render(
    <Provider store={store}>
        <App/>
    </Provider>
)