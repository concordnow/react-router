/**
 * React Router Native v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import * as React from 'react';
import { TouchableHighlight, BackHandler, Linking } from 'react-native';
import { MemoryRouter, useNavigate, useLocation } from 'react-router';
export { AbortedDeferredError, Await, MemoryRouter, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_useRouteId, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, redirectDocument, renderMatches, resolvePath, useActionData, useAsyncError, useAsyncValue, useBlocker, useHref, useInRouterContext, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes } from 'react-router';
import URLSearchParams from '@ungap/url-search-params';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded=["onPress","relative","replace","state","to"];function NativeRouter(props){return React.createElement(MemoryRouter,Object.assign({},props));}function Link(_ref){var onPress=_ref.onPress,relative=_ref.relative,_ref$replace=_ref.replace,replace=_ref$replace===void 0?false:_ref$replace,state=_ref.state,to=_ref.to,rest=_objectWithoutProperties(_ref,_excluded);var internalOnPress=useLinkPressHandler(to,{replace:replace,state:state,relative:relative});function handlePress(event){if(onPress)onPress(event);if(!event.defaultPrevented){internalOnPress(event);}}return React.createElement(TouchableHighlight,Object.assign({},rest,{onPress:handlePress}));}var HardwareBackPressEventType="hardwareBackPress";var URLEventType="url";function useLinkPressHandler(to){var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},replace=_ref2.replace,state=_ref2.state,relative=_ref2.relative;var navigate=useNavigate();return function handlePress(){navigate(to,{replace:replace,state:state,relative:relative});};}function useHardwareBackButton(){React.useEffect(function(){function handleHardwardBackPress(){return undefined;}BackHandler.addEventListener(HardwareBackPressEventType,handleHardwardBackPress);return function(){BackHandler.removeEventListener(HardwareBackPressEventType,handleHardwardBackPress);};},[]);}function useDeepLinking(){var navigate=useNavigate();React.useEffect(function(){var current=true;Linking.getInitialURL().then(function(url){if(current){if(url)navigate(trimScheme(url));}});return function(){current=false;};},[navigate]);React.useEffect(function(){function handleURLChange(event){navigate(trimScheme(event.url));}Linking.addEventListener(URLEventType,handleURLChange);return function(){Linking.removeEventListener(URLEventType,handleURLChange);};},[navigate]);}function trimScheme(url){return url.replace(/^.*?:\/\//,"");}function useSearchParams(defaultInit){var defaultSearchParamsRef=React.useRef(createSearchParams(defaultInit));var hasSetSearchParamsRef=React.useRef(false);var location=useLocation();var searchParams=React.useMemo(function(){var searchParams=createSearchParams(location.search);if(!hasSetSearchParamsRef.current){var _loop=function _loop(key){if(!searchParams.has(key)){defaultSearchParamsRef.current.getAll(key).forEach(function(value){searchParams.append(key,value);});}};for(var key of defaultSearchParamsRef.current.keys()){_loop(key);}}return searchParams;},[location.search]);var navigate=useNavigate();var setSearchParams=React.useCallback(function(nextInit,navigateOpts){var newSearchParams=createSearchParams(typeof nextInit==="function"?nextInit(searchParams):nextInit);hasSetSearchParamsRef.current=true;navigate("?"+newSearchParams,navigateOpts);},[navigate,searchParams]);return [searchParams,setSearchParams];}function createSearchParams(){var init=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return new URLSearchParams(typeof init==="string"||Array.isArray(init)||init instanceof URLSearchParams?init:Object.keys(init).reduce(function(memo,key){var value=init[key];return memo.concat(Array.isArray(value)?value.map(function(v){return [key,v];}):[[key,value]]);},[]));}

export { Link, NativeRouter, createSearchParams, useHardwareBackButton as useAndroidBackButton, useDeepLinking, useHardwareBackButton, useLinkPressHandler, useSearchParams };
//# sourceMappingURL=index.js.map
