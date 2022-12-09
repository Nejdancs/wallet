const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getToken = state => state.auth.token;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getUserBalance = state => state.auth.user.balance;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
  getUserBalance,
  getToken,
};

export default authSelectors;
