export const endpoints = {
    auth: {
        register: "auth/register",
        login: "auth/login"
    },

    dashboard: {
        userCount: "user/get-all-users-count",
        productCount: "product/get-all-products-count"
    },

    bearerToken: `Bearer ${sessionStorage.getItem("***")}`
}