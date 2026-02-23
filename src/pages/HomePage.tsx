import { getUsers } from '../api/users.api';
import { useState, useEffect } from 'react';
import type { User } from '../types/userType';

export function HomePage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // async function inside useEffect
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (

        <div>
            {users.map(u => {
                return (
                    <p key={u.id}>{u.name}</p>
                )
            })}
            <h1 className="text-2xl font-bold underline color:white">HomePage HomePage HomePage HomePage HomePage </h1>
        </div>
    )
}