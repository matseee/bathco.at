import './styles.scss';

import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {};
const config: Configuration = { devServer };

// module.exports
export default config;