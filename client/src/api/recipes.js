import axios from "axios";
import { baseURL } from "utils/getBaseUrl";
import { handleRequest } from "api/handleRequest";

export const getRecipeById = async (id) =>
  handleRequest(axios.get(`${baseURL}/${id}`));

export const deleteRecipeById = async (id) =>
  handleRequest(axios.delete(`${baseURL}/${id}`));

export const updateRecipeById = async (id, params) =>
  handleRequest(axios.put(`${baseURL}/${id}`, params));

export const createRecipe = async (params) =>
  handleRequest(axios.post(baseURL, params));
