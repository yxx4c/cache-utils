import {camelCase} from 'lodash';

export type CacheIdParams = {[key: string]: string}[];

/**
 * @deprecated Use getCacheKey() instead.
 */
const getCacheId = (params: CacheIdParams) =>
  params.map(obj => Object.entries(obj).map(([key, value]) => `${camelCase(key)}:${camelCase(value)}`)).join(':');

export default getCacheId