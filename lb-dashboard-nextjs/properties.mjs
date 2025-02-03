const properties = {
  server: {
    port: Number.parseInt(process.env.APP_SERVER_PORT || 3000, 10),
    serviceId: process.env.PORTAL_SERVICE_FRONTEND_ID || "BFF",
    secretKey: process.env.PORTAL_SERVICE_FRONTEND_SECRET_KEY || "Mammoth1234",
    environment: process.env.PORTAL_SERVICE_ENVIRONMENT || "dev",
  },
  http: {
    client: {
      timeout: Number.parseInt(process.env.APP_HTTP_CLIENT_TIMEOUT || "10", 10),
    },
  },
  portal: {
    baseUrl: process.env.PORTAL_BASE_URL || "http://localhost:80",
  },
};

export default properties;
