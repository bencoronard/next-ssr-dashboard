import axios from "axios";
import properties from "@/../properties.mjs";

const httpClient = axios.create({
  baseURL: properties.portal.baseUrl,
  timeout: properties.http.client.timeout,
  withCredentials: true,
});

export default httpClient;
