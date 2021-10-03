import type { IAuth } from '@/api/types/auth';

export default function login(
  params: IAuth,
): string {
  return params.login;
}

// export const register = () => ({});
