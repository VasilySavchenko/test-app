import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import MainPage from '../../app/views/MainPage';
import Users from "../components/Users";
import Posts from "../components/Posts";
import Albums from "../components/Albums";
/**
 * ComponentRoutes holds all needed information to fill up routes config.
 */
export class ComponentRoutes implements RouteObject {
    /** data route config*/
    constructor(
        public path: string,
        public element: React.ReactNode,
        public children?: ComponentRoutes[]
    ) { }
    /** Method for creating child sub-routes path */
    public with(
        child: ComponentRoutes,
    ): string {
        return `${this.path}/${child.path}`;
    }
    /** Call with method for each child */
    public addChildren(children: ComponentRoutes[]): ComponentRoutes {
        this.children = children;

        return this;
    }
}

/** Route config implementation */
export class RouteConfig {
    public static MainPage: ComponentRoutes = new ComponentRoutes(
        '/',
        <MainPage/>
    );

    public static Users: ComponentRoutes = new ComponentRoutes(
        '',
        <Users/>
    );

    public static Posts: ComponentRoutes = new ComponentRoutes(
        'posts/:id',
        <Posts/>
    );

    public static Albums: ComponentRoutes = new ComponentRoutes(
        'albums/:id',
        <Albums/>
    );


    public static routes: ComponentRoutes[] = [
        RouteConfig.MainPage.addChildren([
            RouteConfig.Users,
            RouteConfig.Posts,
            RouteConfig.Albums
        ])
    ];
}

export const Routes = () => useRoutes(RouteConfig.routes);

