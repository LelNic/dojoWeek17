import messengerController from "../controllers/messengerController.js";

const setupRoutes = (app) => {
  app.use("/messenger", messengerController);
};

export default setupRoutes;
