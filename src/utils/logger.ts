import { loggerStyling } from '../constants';

// todo - log method should be configured based on process.env.NODE_ENV variable
export const log = (logDescription: string, ...values: unknown[]) => {
  console.log(
    loggerStyling.directive + logDescription,
    loggerStyling.cssInfoRules,
    ...values
  );
};

export const err = (logDescription: string, ...values: unknown[]) => {
  console.error(
    loggerStyling.directive + logDescription,
    loggerStyling.cssErrorRules,
    ...values
  );
};
