import axiosClient from "./axiosClient";

const catygoryApi = {
  getAll(param) {
    const url = "/categories";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url, { param });
  },
  add(data) {
    const url = `/categories`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.path(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryapi;
