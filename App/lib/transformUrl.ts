export const transformUrl = (url: string): string => {
  const localIp = "192.168.1.100";
  if (url.includes("localhost")) {
    return url.replace("localhost", localIp);
  }
  return url;
};
