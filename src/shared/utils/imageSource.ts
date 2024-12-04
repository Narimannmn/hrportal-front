const PUBLIC_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const imageSource = (url: string) => {
  return (PUBLIC_URL + url).replace('/api', '');
};
