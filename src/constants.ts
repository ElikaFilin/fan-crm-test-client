export const appRoutes = {
  baseUrl: 'http://localhost:3001/api/v1',
  login: '/auth/login',
  getUser: '/get-user',
};
export enum HTTP_METHODS {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
}
export const loggerStyling = {
  directive: '%c',
  cssErrorRules: 'color: red;',
  cssInfoRules: 'color: blue;',
};
export const errorsMessages = {
  notInsertedContext: 'function must be overridden in Provider',
  loginForm: {
    failedToSubmit: 'Failed to submit form:',
    usernameRequired: 'Please input your username',
  },
};
export const logDescriptions = {
  requestDetails: 'Request details:',
  logResponse: 'Response:',
  logError: 'Error:',
};
