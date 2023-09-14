import HNSearchApiService, { HNSearchApiServiceType } from "./HNSearchApiService";

const repositories = {
  HNSearch: HNSearchApiService,
};

type RepositoryName = keyof typeof repositories;

interface Repositories {
  HNSearch: HNSearchApiServiceType;
}

export const RepositoryFactory = {
  get: <T extends RepositoryName>(name: T): Repositories[T] => repositories[name],
};
