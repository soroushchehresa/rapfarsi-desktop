import axios, { AxiosResponse, AxiosError } from 'axios';
import _ from 'lodash';

interface AxiosResponseObject {
  message: string,
  response: AxiosResponse<any>,
}

export default class XHR {
  public static GET = XHR.requestWrapper('get');
  public static POST = XHR.requestWrapper('post');
  public static PUT = XHR.requestWrapper('put');
  public static PATCH = XHR.requestWrapper('patch');
  public static HEAD = XHR.requestWrapper('head');
  public static DELETE = XHR.requestWrapper('delete');

  private static requestWrapper(method: string) {
    return async (url: string, data: object = {}, options: object = {}) => {
      const { requestURL, request }: {
        requestURL: string,
        request: object,
      } = await XHR.decorateRequest({
        url,
        method,
        data,
        options
      });
      return new Promise((resolve) => {
        axios({ url: requestURL, ...request })
          .then((response: AxiosResponse<any>) => {
            XHR.checkStatus(response, resolve);
          })
          .catch((error: AxiosError<any>) => {
            XHR.checkStatus(error, resolve);
          });
      });
    };
  }

  private static checkStatus(
    response: AxiosResponse<any> | AxiosError<any>,
    resolve: (data: AxiosResponse<any> | AxiosError<any> | AxiosResponseObject) => void
  ) {
    if ((response as { message: string }).message === 'Network Error') {
      console.log('=======> Network error!');
      return resolve(response);
    }
    const status = _.get(response, ['status']) || _.get(response, ['response', 'status']);
    if (status === 401) {
      console.log('=======> Unauthorized user');
    }
    return (status && status >= 200 && status < 300)
      ? resolve(response) : resolve((response as { response: AxiosResponse<any> }).response);
  }

  private static async decorateRequest(
    {
      data,
      method,
      url,
      options
    }: {
      data: object,
      method: string,
      url: string,
      options: object,
    }
  ) {
    const requestURL = `${process.env.API_PROTOCOL}://${process.env.API_BASE}${(process.env.API_PORT && process.env.API_PORT !== 'null') ? `:${process.env.API_PORT}` : ''}${(process.env.API_PATH && process.env.API_PATH !== 'null') ? `/${process.env.API_PATH}` : ''}/${url}`;
    let requestHeadersDataDecoration = await XHR.getHeaderDataDecoration();
    let reqData: any = {
      request: {
        ...options,
        ...requestHeadersDataDecoration,
        method,
        data
      },
      requestURL
    };
    if (method === 'get' && _.get(reqData, ['request', 'data'])) {
      delete reqData.request.data;
    }
    return reqData;
  }

  private static async getHeaderDataDecoration() {
    let headers: object = {
      'Content-Type': 'application/json'
    };
    return { headers };
  }
}
