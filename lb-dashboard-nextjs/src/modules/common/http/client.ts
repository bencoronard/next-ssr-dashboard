import axios from "axios";
import properties from "@/properties";

const httpClient = axios.create({
  baseURL: properties.portal.baseUrl,
  timeout: properties.http.client.timeout,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    // "X-API-KEY": properties.server.secretKey,
  },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-CSRF-TOKEN",
});

export default httpClient;
