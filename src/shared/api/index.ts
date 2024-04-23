import * as api from "./generated";
import { Configuration } from "./generated/configuration";

const config: Configuration = { basePath: "http://192.168.14.141:8400" };

export const apiClient = new api.APIApi(config);
