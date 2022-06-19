export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserData {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
}