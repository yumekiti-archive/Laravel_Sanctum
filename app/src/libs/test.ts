import client from "./client"

// 取得
export const getTest = () => {
  return client.get("/")
}
