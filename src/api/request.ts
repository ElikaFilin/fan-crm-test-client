import { appRoutes, HTTP_METHODS, logDescriptions } from '../constants';
import { err, log } from '../utils/logger';
import { appStore } from '../store/appStorage';

interface IRequest<T> {
  actionUrl: string;
  body?: T;
  method?: HTTP_METHODS;
}

const { requestDetails, logError, logResponse } = logDescriptions;

export async function request<T, R>({
  actionUrl,
  body,
  method = HTTP_METHODS.GET,
}: IRequest<T>): Promise<Promise<R>> {
  const url = `${appRoutes.baseUrl}${actionUrl}`;
  try {
    log(requestDetails, { url, body });
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${appStore.getAccessToken()}`,
      },
    });
    const response = await res.json();
    log(logResponse, response);
    return response;
  } catch (error) {
    err(logError, error);
    throw error;
  }
}
