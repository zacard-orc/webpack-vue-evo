import dayjs from 'dayjs';

export const log = {
  _dateFmt: 'HH:mm:ss.SSS',
  _dateCss: 'font-size:10px;background-color:grey;color:white;border-radius: 2px;padding: 0px 4px;',
  _msgInfoCss: 'color: blue;font-weight: 500',
  _msgSuccessCss: 'color: green;font-weight: 500',
  _msgWarnCss: 'color: orange;font-weight: 500',
  _msgErrorCss: 'color: red;font-weight: 500',
  info(message) {
    console.log(`%c${dayjs().format(this._dateFmt)}%c ${message}`, this._dateCss, this._msgInfoCss, { a: 1 });
  },
  success(message) {
    console.log(`%c${dayjs().format(this._dateFmt)}%c ${message}`, this._dateCss, this._msgSuccessCss);
  },
  warn(message) {
    console.log(`%c${dayjs().format(this._dateFmt)}%c ${message}`, this._dateCss, this._msgWarnCss);
  },
  error(message) {
    console.log(`%c${dayjs().format(this._dateFmt)}%c ${message}`, this._dateCss, this._msgErrorCss);
  },
};

export const logfn = () => {
  const _dateFmt = 'HH:mm:ss.SSS';
  const _dateCss = 'font-size:10px;background-color:grey;color:white;border-radius: 2px;padding: 0px 4px;';
  const _msgInfoCss = 'color: blue;font-weight: 500';
  const _msgSuccessCss = 'color: green;font-weight: 500';
  const _msgWarnCss = 'color: orange;font-weight: 500';
  const _msgErrorCss = 'color: red;font-weight: 500';
  return {
    info(message, ...rest) {
      console.log(`%c${dayjs().format(_dateFmt)}%c ${message}`, _dateCss, _msgInfoCss, ...rest);
    },
    success(message, ...rest) {
      console.log(`%c${dayjs().format(_dateFmt)}%c ${message}`, _dateCss, _msgSuccessCss, ...rest);
    },
    warn(message, ...rest) {
      console.log(`%c${dayjs().format(_dateFmt)}%c ${message}`, _dateCss, _msgWarnCss, ...rest);
    },
    error(message, ...rest) {
      console.log(`%c${dayjs().format(_dateFmt)}%c ${message}`, _dateCss, _msgErrorCss, ...rest);
    },
  };
};
