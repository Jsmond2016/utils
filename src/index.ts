import qs from 'querystring';

// 时间格式 年-月-日
export const DATE_TYPE_FORMAT = 'YYYY-MM-DD';
// 时间格式 年-月-日 时-分-秒
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const getToken = () => {
  const { token } = qs.parse(window.location.search.slice(1));
  return token;
};

export const getParams = () => {
  const params = qs.parse(window.location.search.slice(1));
  return params;
};

/**
 * 生成UUID
 */
 export const generateUUID = () => {
  let time = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (time + Math.random() * 16) % 16 | 0;
    time = Math.floor(time / 16);
    // eslint-disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};