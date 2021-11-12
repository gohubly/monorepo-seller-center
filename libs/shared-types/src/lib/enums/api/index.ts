import { LOGIN_ROUTES } from './loginRoutes.enum'
import { USER_ROUTES } from './userRoutes.enum'

export const ApiRoutes = { ...LOGIN_ROUTES, ...USER_ROUTES };
export type ApiRoutesTypes = keyof typeof ApiRoutes;
