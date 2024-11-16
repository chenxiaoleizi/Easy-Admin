import http from "../http";

// 获取角色列表
export function getRoleList(params: { username: string; password: string }) {
  return http.post("/roleList", params);
}
