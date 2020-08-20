import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
  private static instance: HttpService;
  private readonly axios: AxiosInstance;
  private constructor() {
    this.axios = Axios.create();
  }

  public static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }

    return HttpService.instance;
  }

  public async get<T = {}>(
    url: string,
    options?: Omit<AxiosRequestConfig, 'url' | 'data'>
  ): Promise<T> {
    return this.axios.get(url, options);
  }

  public async post<T = {}>(
    url: string,
    body: Record<string, any>,
    options?: Omit<AxiosRequestConfig, 'url' | 'data'>
  ): Promise<T> {
    return this.axios.post(url, JSON.stringify(body), options);
  }

  public async put<T = {}>(
    url: string,
    body: Partial<Record<string, any>>,
    options?: Omit<AxiosRequestConfig, 'url' | 'data'>
  ): Promise<T> {
    return this.axios.put(url, JSON.stringify(body), options);
  }

  public async delete<T = {}>(
    url: string,
    options?: Omit<AxiosRequestConfig, 'url' | 'data'>
  ): Promise<T> {
    return this.axios.delete(url, options);
  }
}
