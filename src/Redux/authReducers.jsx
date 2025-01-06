// // src/redux/authReducer.js
// const initialState = {
//   isAuthenticated: localStorage.getItem("isAuthenticated") === "true", // Read from localStorage
//   user: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       // Store in localStorage when logged in
//       localStorage.setItem("isAuthenticated", "true");
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     case "LOGOUT":
//       // Clear localStorage when logged out
//       localStorage.removeItem("isAuthenticated");
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };
// export default authReducer;
