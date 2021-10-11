export interface IUser {
    email: string;
    avatar: string;
    nickName: string;
    password: string;
    confirmed: boolean;
    confirm_hash: string;
    last_seen: string;
}