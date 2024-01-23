import { CacheKeyPatternParams } from "./types";
import { CacheCase, caseMap } from "./utils";

const globCheckRegex = /[*?]/;

const globCheck = (s: string) => globCheckRegex.test(s);

export const getCacheKeyPattern = (
  params: CacheKeyPatternParams,
  delimiter = ":",
  cacheCase: CacheCase = CacheCase.CAMEL_CASE
) =>
  params
    .map((obj) =>
      Object.entries(obj)
        .map(([key, value]) => {
          if (key.toLowerCase() === "glob") return value;

          const formattedKey = globCheck(key)
            ? key
            : caseMap[cacheCase](key);

          const formattedValue = globCheck(value)
            ? value
            : caseMap[cacheCase](value);

          return `${formattedKey}:${formattedValue}`;
        })
        .join(delimiter)
    )
    .join(delimiter);

export default getCacheKeyPattern;
