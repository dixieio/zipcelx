import {
  MISSING_KEY_FILENAME,
  MISSING_KEY_TITLE,
  INVALID_TYPE_FILENAME,
  INVALID_TYPE_SHEET
} from './commons/constants';

export default (config) => {
  if (!config.filename) {
    console.error(MISSING_KEY_FILENAME);
    return false;
  }

  if (typeof config.filename !== 'string') {
    console.error(INVALID_TYPE_FILENAME);
    return false;
  }

  for (let i = 0; i < config.sheets.length; i++) {
    if (!Array.isArray(config.sheets[i].data)) {
      console.error(INVALID_TYPE_SHEET);
      return false;
    }
  }

  return true;
};
