/* eslint-disable import/prefer-default-export */

/**
 * This is a simple function to log stuff.
 *
 * @param msg - The message to get logged.
 * @param data - The data to get logged.
 */
export function log(msg: string, data?: any) {
  // eslint-disable-next-line no-console
  console.log(msg, data);
}
