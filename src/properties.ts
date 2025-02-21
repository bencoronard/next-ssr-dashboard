const properties = {
  server: {
    port: Number.parseInt(process.env.APP_SERVER_PORT || "3000", 10),
    environment: process.env.DEMO_SERVICE_ENVIRONMENT || "dev",
    serviceId: process.env.DEMO_SERVICE_FRONTEND_ID || "DASHBOARD",
    secretKey:
      process.env.DEMO_SERVICE_FRONTEND_SECRET_KEY || "hireBenDemoSecretKey",
  },
  http: {
    client: {
      timeout: Number.parseInt(
        process.env.NEXT_PUBLIC_APP_HTTP_CLIENT_TIMEOUT || "7000",
        10
      ),
    },
  },
  portal: {
    baseUrl:
      process.env.NEXT_PUBLIC_APP_PORTAL_BASE_URL || "http://localhost:8080",
    xsrf: {
      cookieName:
        process.env.NEXT_PUBLIC_APP_PORTAL_XSRF_COOKIE || "XSRF-TOKEN",
      headerName:
        process.env.NEXT_PUBLIC_APP_PORTAL_XSRF_HEADER || "X-Csrf-Token",
    },
  },
};

export default properties;
