"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  /**
   * Here you may specify which of the database connections below you wish
   * to use as your default connection for all database work. 
   */
  connection: process.env.DB_CONNECTION || "mysql",
  /**
   * Here you may specify the host address of database which will be
   * used for connection
   */
  host: process.env.DB_HOST || "127.0.0.1",
  /**
   * Here you may specify the port of database which will be
   * used for connection
   */
  port: process.env.DB_PORT || 3306,
  /**
   * Here you may specify the database name of connection which will be
   * used for connection
   */
  database: process.env.DB_DATABASE || "forge",
  /**
   * Here you may specify the username of database which will be
   * used for connection
   */
  username: process.env.DB_USERNAME || "forge",
  /**
   * Here you may specify the password of database which will be
   * used for connection
   */
  password: process.env.DB_PASSWORD || ""
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwicHJvY2VzcyIsImVudiIsIkRCX0NPTk5FQ1RJT04iLCJob3N0IiwiREJfSE9TVCIsInBvcnQiLCJEQl9QT1JUIiwiZGF0YWJhc2UiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIHlvdSBtYXkgc3BlY2lmeSB3aGljaCBvZiB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbnMgYmVsb3cgeW91IHdpc2hcclxuICAgICAqIHRvIHVzZSBhcyB5b3VyIGRlZmF1bHQgY29ubmVjdGlvbiBmb3IgYWxsIGRhdGFiYXNlIHdvcmsuIFxyXG4gICAgICovXHJcbiAgICBjb25uZWN0aW9uIDogcHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTiB8fCBcIm15c3FsXCIsXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVyZSB5b3UgbWF5IHNwZWNpZnkgdGhlIGhvc3QgYWRkcmVzcyBvZiBkYXRhYmFzZSB3aGljaCB3aWxsIGJlXHJcbiAgICAgKiB1c2VkIGZvciBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIGhvc3QgIDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCBcIjEyNy4wLjAuMVwiLFxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIHlvdSBtYXkgc3BlY2lmeSB0aGUgcG9ydCBvZiBkYXRhYmFzZSB3aGljaCB3aWxsIGJlXHJcbiAgICAgKiB1c2VkIGZvciBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHBvcnQgOiBwcm9jZXNzLmVudi5EQl9QT1JUIHx8IDMzMDYsXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVyZSB5b3UgbWF5IHNwZWNpZnkgdGhlIGRhdGFiYXNlIG5hbWUgb2YgY29ubmVjdGlvbiB3aGljaCB3aWxsIGJlXHJcbiAgICAgKiB1c2VkIGZvciBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIGRhdGFiYXNlICA6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFIHx8IFwiZm9yZ2VcIixcclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSGVyZSB5b3UgbWF5IHNwZWNpZnkgdGhlIHVzZXJuYW1lIG9mIGRhdGFiYXNlIHdoaWNoIHdpbGwgYmVcclxuICAgICAqIHVzZWQgZm9yIGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgdXNlcm5hbWUgOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSB8fCBcImZvcmdlXCIsXHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgeW91IG1heSBzcGVjaWZ5IHRoZSBwYXNzd29yZCBvZiBkYXRhYmFzZSB3aGljaCB3aWxsIGJlXHJcbiAgICAgKiB1c2VkIGZvciBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHBhc3N3b3JkIDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQgfHwgXCJcIixcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O29DQUFlO0VBRVg7QUFDSjtBQUNBO0FBQ0E7RUFDSUEsVUFBVSxFQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBYSxJQUFJLE9BQU87RUFHakQ7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxFQUFJSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csT0FBTyxJQUFJLFdBQVc7RUFHMUM7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxFQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssT0FBTyxJQUFJLElBQUk7RUFHbEM7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsUUFBUSxFQUFJUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sV0FBVyxJQUFJLE9BQU87RUFHOUM7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsUUFBUSxFQUFHVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsV0FBVyxJQUFJLE9BQU87RUFHN0M7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsUUFBUSxFQUFHWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csV0FBVyxJQUFJO0FBQzFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=