import { Store, plugin } from "vuex-composition-api";
import { Clothes } from "./modules/Clothes";

export const store =
  process.env.NODE_ENV === "production"
    ? undefined
    : new Store({
        plugins: [plugin([Clothes])]
      });

export const modules = {
  Clothes
};
