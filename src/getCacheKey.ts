import { CacheKeyParams } from "./types";
import { CacheCase, caseMap } from "./utils";

export const getCacheKey = (
  params: CacheKeyParams,
  delimiter = ":",
  cacheCase: CacheCase = CacheCase.CAMEL_CASE
) =>
  params
    .map((obj) =>
      Object.entries(obj)
        .map(
          ([key, value]) =>
            `${caseMap[cacheCase](key)}:${caseMap[cacheCase](
              value
            )}`
        )
        .join(delimiter)
    )
    .join(delimiter);

export default getCacheKey;
