import Routes, { Router, LinkProps } from 'next-routes';
import { ComponentType } from 'react';

type Routes = '/' | 'book-details';
interface IRouter extends Router {
    pushRoute(route: Routes, params?: RouteParams, options?: EventChangeOptions): Promise<boolean>;
}
export const Router: IRouter;
export const Link: ComponentType<LinkProps>;
export default Routes;
