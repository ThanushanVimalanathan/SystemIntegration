const { setup } = require('@testing-library/user-event');

module.exports = async () => {
  // Start your server or perform other setup
  global.user = setup();
};