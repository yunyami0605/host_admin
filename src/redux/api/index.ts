/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
import axios from "axios";

const baseURL = "https://host-620e9-default-rtdb.firebaseio.com";

interface IApiCall {
  version?: string;
  url: string;
  headers?: any;
  data?: any;
  method: "GET" | "POST" | "DELETE" | "OPTIONS" | "PUT" | "PATCH";
  isUpdateToken?: boolean;
}

/* api 호출 함수 셋팅 및 호출
 * @param
 * rest : 서버로 보낼 데이터 && HTTP 메소드
 * headers : api 설정 객체
 * baseURL : 기본 url
 * url : 요청 url
 */
export async function apiCall(payload: IApiCall) {
  const { version, url, isUpdateToken, headers = {}, ...rest } = payload;

  const options = {
    ...rest,
    headers,
    // baseURL,
    url,
  };

  // axios 설정
  const api = axios.create();
  api.defaults.baseURL = baseURL;
  api.defaults.headers.common = { "X-Requested-With": "XMLHttpRequest" };
  options.headers = {
    ...options.headers,
    "Content-Type": "application/json;charset=utf-8;",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS, PATCH",
    Accept: "application/json",
  };

  try {
    // 클라이언트 요청
    const res = await api(options);
    // console.log(res);

    // console.log(res);
    return {
      data: res.data,
      status: res.status,
    };
  } catch (e: any) {
    const res = e.response;
    console.log("ERROR : ");
    console.log(res);

    return {
      data: null,
      status: res.status,
    };
  }
}
