const apiDevPort = process.env.REACT_APP_API_DEV_PORT;
const developmentEnv = `${process.env.REACT_APP_API_DEV}:${apiDevPort}`;
const productionEnv = process.env.REACT_APP_API_PROD;

export { developmentEnv, productionEnv };
