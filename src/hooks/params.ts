import { useRouter } from 'next/router';

export const useStringParam = (paramName: string): string | undefined => {
  const { query } = useRouter();

  const param = query[paramName];

  if (Array.isArray(param)) {
    throw new Error(
      `The url param: ${paramName} is an array. Expected a string`
    );
  }

  return param;
};

export const useCountry = () => useStringParam('country');
