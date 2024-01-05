import {camelCase} from 'lodash';

export type CacheIdPatternParams = {[key: string]: string}[];

export const getCacheIdPattern = (params: CacheIdPatternParams) =>
  params
    .map(obj =>
      Object.entries(obj).map(([key, value]) =>
        key.toLocaleLowerCase() === 'glob' ? value : `${camelCase(key)}:${camelCase(value)}`,
      ),
    )
    .join(':');


export default getCacheIdPattern