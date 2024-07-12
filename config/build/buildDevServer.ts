import type { Configuration as DevServerConfiguration } from "webpack-dev-server"


export default function buildDevServer(port:number):DevServerConfiguration {
    return {
            port: port ?? 3000,
            open: true
    }
}