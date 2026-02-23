import { apiClient } from "./client";
import type { User } from '../types/userType';

export const getUsers = async (): Promise<User[]> => {
    const res = await apiClient.get('/api/users');
    return res.data;
};