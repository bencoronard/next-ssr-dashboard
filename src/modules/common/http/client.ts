import axios from "axios";
import properties from "@/properties";

const httpClient = axios.create({
  baseURL: properties.portal.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  xsrfCookieName: properties.portal.xsrf.cookieName,
  xsrfHeaderName: properties.portal.xsrf.headerName,
  timeout: properties.http.client.timeout,
});

export default httpClient;
