import axiosInstance from "@/utils/request";

export function findVideoList(params = {}) {
  return axiosInstance.get("/api/videos", params);
}