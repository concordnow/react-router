import * as React from "react";
import type { GestureResponderEvent, TouchableHighlightProps } from "react-native";
import type { To, MemoryRouterProps, NavigateOptions, RelativeRoutingType } from "react-router";
import URLSearchParams from "@ungap/url-search-params";
export type { ActionFunction, ActionFunctionArgs, AwaitProps, unstable_Blocker, unstable_BlockerFunction, DataRouteMatch, DataRouteObject, ErrorResponse, Fetcher, Hash, IndexRouteObject, IndexRouteProps, JsonFunction, LazyRouteFunction, LayoutRouteProps, LoaderFunction, LoaderFunctionArgs, Location, MemoryRouterProps, NavigateFunction, NavigateOptions, NavigateProps, Navigation, Navigator, NonIndexRouteObject, OutletProps, Params, ParamParseKey, Path, PathMatch, Pathname, PathParam, PathPattern, PathRouteProps, RedirectFunction, RelativeRoutingType, RouteMatch, RouteObject, RouteProps, RouterProps, RouterProviderProps, RoutesProps, Search, ShouldRevalidateFunction, ShouldRevalidateFunctionArgs, To, UIMatch, } from "react-router";
export { AbortedDeferredError, Await, MemoryRouter, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, defer, isRouteErrorResponse, generatePath, json, matchPath, matchRoutes, parsePath, redirect, redirectDocument, renderMatches, resolvePath, useActionData, useAsyncError, useAsyncValue, useBlocker, useHref, useInRouterContext, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, } from "react-router";
/** @internal */
export { UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_NavigationContext, UNSAFE_LocationContext, UNSAFE_RouteContext, UNSAFE_useRouteId, } from "react-router";
export interface NativeRouterProps extends MemoryRouterProps {
}
/**
 * A `<Router>` that runs on React Native.
 */
export declare function NativeRouter(props: NativeRouterProps): React.JSX.Element;
export interface LinkProps extends TouchableHighlightProps {
    children?: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    relative?: RelativeRoutingType;
    replace?: boolean;
    state?: any;
    to: To;
}
/**
 * A `<TouchableHighlight>` that navigates to a different URL when touched.
 */
export declare function Link({ onPress, relative, replace, state, to, ...rest }: LinkProps): React.JSX.Element;
/**
 * Handles the press behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same press behavior we
 * use in our exported `<Link>`.
 */
export declare function useLinkPressHandler(to: To, { replace, state, relative, }?: {
    replace?: boolean;
    state?: any;
    relative?: RelativeRoutingType;
}): (event: GestureResponderEvent) => void;
/**
 * Enables support for the hardware back button on Android.
 */
export declare function useHardwareBackButton(): void;
export { useHardwareBackButton as useAndroidBackButton };
/**
 * Enables deep linking, both on the initial app launch and for
 * subsequent incoming links.
 */
export declare function useDeepLinking(): void;
/**
 * A convenient wrapper for accessing individual query parameters via the
 * URLSearchParams interface.
 */
export declare function useSearchParams(defaultInit?: URLSearchParamsInit): [URLSearchParams, SetURLSearchParams];
export type SetURLSearchParams = (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit), navigateOpts?: NavigateOptions) => void;
export type ParamKeyValuePair = [string, string];
export type URLSearchParamsInit = string | ParamKeyValuePair[] | Record<string, string | string[]> | URLSearchParams;
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
export declare function createSearchParams(init?: URLSearchParamsInit): URLSearchParams;
