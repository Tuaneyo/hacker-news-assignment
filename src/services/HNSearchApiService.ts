import { HNSearchData } from "@/interfaces/HNSearchData";
import HNSearchRepository from "./HNSearchRepository";
import { ApiResponse } from "@/interfaces/ApiResponse";

const HNSearchApiService = {
  async getFrontPage(): Promise<ApiResponse<HNSearchData>> {
    return await HNSearchRepository.get('/search?tags=front_page');
  },
  async getStoriesByPage(pageNumber: number): Promise<ApiResponse<HNSearchData>> {
    return await HNSearchRepository.get(`/search?tags=front_page&page=${pageNumber}`);
  },
  async getItem(id: number): Promise<ApiResponse<HNSearchData>> {
    return await HNSearchRepository.get(`/items/${id}`);
  }
};

export type HNSearchApiServiceType = typeof HNSearchApiService;
export default HNSearchApiService;