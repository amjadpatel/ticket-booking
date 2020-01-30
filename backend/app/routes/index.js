
import initBookRoutes from "./bookRoutes";
import initUserRoutes from './userRoutes'

const initRoutes = (app) => {
  app.use(`/api/book`, initBookRoutes());
  app.use(`/api/user`, initUserRoutes());

};


export default initRoutes;
