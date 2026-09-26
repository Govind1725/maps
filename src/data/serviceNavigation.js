import { serviceDetails } from "./serviceDetails";

export const serviceNavigation = serviceDetails.map(({ id, name }) => ({ id, name }));
