import Axios from "axios";

const BASE_URL = "https://d17btosbk6wddi.cloudfront.net/v1";

export type HeaderOptions = { token?: string } & any;

export const getHeaders = (headerOptions?: HeaderOptions) => {
  const { token, ...otherOptions } = headerOptions || {};

  return {
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...otherOptions,
  };
};

export const handleRequest = async (options: any) => {
  const { body, endpoint, ...otherOptions } = options;

  const axiosConfig = {
    url: `${BASE_URL}/${endpoint}`,
    headers: {
      Accept: "application/json",
    },
    ...(body && { data: body }),
    ...otherOptions,
  };

  try {
    const response = await Axios(axiosConfig);

    const { data } = response.data || {};

    return data;
  } catch (error) {
    throw error;
  }
};
