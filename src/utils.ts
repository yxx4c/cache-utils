import { camelCase, kebabCase, snakeCase, startCase } from "lodash";

export enum CacheCase {
  CAMEL_CASE = "camelCase",
  KEBAB_CASE = "kebabCase",
  SNAKE_CASE = "snakeCase",
  START_CASE = "startCase",
}

export const caseMap = {
  [CacheCase.CAMEL_CASE]: camelCase,
  [CacheCase.KEBAB_CASE]: kebabCase,
  [CacheCase.SNAKE_CASE]: snakeCase,
  [CacheCase.START_CASE]: startCase,
};
