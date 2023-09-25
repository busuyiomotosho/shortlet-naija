import axios from "axios";
import { createUrl, post } from "./http";
import qs from "querystring";

export const createListingAPI = async (listingData) => {
  const result = await post(createUrl("/api/listings"), {
    ...listingData,
  }).catch(() => null);

  if (!result.data) {
    return alert("Could not create listing");
  }

  return result;
};

export const getAllListingsAPI = async () => {
  const result = await axios.get(createUrl(`/api/listings`));

  if (!result) {
    alert("Could not get all listings!");
    return [];
  }
  return result.data;
};
