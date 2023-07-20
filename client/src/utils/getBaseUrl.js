import { developmentEnv, productionEnv } from "utils/getEnvironment";

const apiPath = "api/recipes";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? `${developmentEnv}/${apiPath}/`
    : `${productionEnv}/${apiPath}/`;
