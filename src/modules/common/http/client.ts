import axios from "axios";
import properties from "@/properties";

const httpClient = axios.create({
  baseURL: properties.portal.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "hireBenDemoSecretKey",
    "X-User-Id": "InwThird888",
    "X-User-Tenant": "SIRISOFT",
    "X-Trace-Id": "777-800",
  },
  xsrfCookieName: properties.portal.xsrf.cookieName,
  xsrfHeaderName: properties.portal.xsrf.headerName,
  timeout: properties.http.client.timeout,
});

export default httpClient;
