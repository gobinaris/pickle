/*
 When a microservice returns an error response, it should in the following format:

 HTTP Response Headers
   Content-Type: application/json
   Status: Some 4xx or 5xx status.

 HTTP Response Body
  {
    "errorCode": "<one of the above strings>",
    "message": "<the corresponding value from the above map>",
    "anyExtraField": 'e.g. could be request id'
  }

*/

// Mapping between well known Binaris error codes and
// their human-readable string representation. Error
// strings should be concise informative and without
// trailing punctuation (no !). The first letter should
// be capital (barring abnormal circumstances).
const errStringMap = {
  ERR_BAD_KEY: 'Invalid API key',
  ERR_INTERNAL: 'Internal Binaris server error',
  ERR_NO_REQ_ID: 'Missing request ID header',
  ERR_NO_SUCH_FUNCTION: 'No such function',
  ERR_OUTDATED_CLIENT:
    'Client version is out of date, please update using "npm install -g binaris"',
  ERR_PAYLOAD_TOO_LARGE: 'Payload too large',
  /** Here we define error codes which are local to the CLI. */
  ERR_NO_BACKEND: 'Could not connect to Binaris backend',
};

/**
 * Translates a provided Binaris error code into its more
 * explicit and descriptive string representation.
 *
 * @param {string} errCode - errCode to retrieve string of
 * @returns {string} - string representing raw error code
 */
const translateErrorCode = function translateErrorCode(errCode) {
  return errStringMap[errCode] || errCode;
};

/**
 * Translates a provided Binaris error code into a more explicit and
 * descriptive string representation, or returns null if no better
 * representation exists.
 */
const maybeTranslateErrorCode = function maybeTranslateErrorCode(errCode) {
  return errStringMap[errCode] || null;
};

module.exports = {
  translateErrorCode, maybeTranslateErrorCode,
};
