import { cookies } from 'next/headers';
import axios from 'axios';
import UserProfile from '../components/UserProfile';

export default async function Page() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    let data = {};
    try {
        const response = await axios.get('http://localhost:9000/user/get', {
            headers: {
                'Cookie': `token=${token?.value || ''}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        data = response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    console.log(data);

    return <UserProfile data={data} />;
}