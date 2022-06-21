export const authenticate = (response) => {
    localStorage.setItem("access", JSON.stringify(response.data.access))
    localStorage.setItem("refresh", JSON.stringify(response.data.refresh))
}