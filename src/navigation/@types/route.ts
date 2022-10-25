import type { FC, LazyExoticComponent, ComponentType } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

type AllKeys<T> = T extends unknown ? keyof T : never;
type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;
type _ExclusifyUnion<T, K extends PropertyKey> = T extends unknown ? Id<T & Partial<Record<Exclude<K, keyof T>, never>>> : never;
type ExclusifyUnion<T> = _ExclusifyUnion<T, AllKeys<T>>;

interface IRouteBase {
  path: (param?: string) => string;
  guards?: FC[];
  providers?: FC[];
  layout?: FC;
}

interface INoChildRoute extends IRouteBase {
  component: LazyExoticComponent<ComponentType<RouteComponentProps>> | FC<RouteComponentProps>;
}

interface IWithChildRoute extends IRouteBase {
  routes: IRoute[];
  redirect: string;
}

export type IRoute = ExclusifyUnion<INoChildRoute | IWithChildRoute>;
