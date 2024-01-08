import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
	const [user, setUSer] = useState(null);

	const auth = getAuth();

	useEffect(() => {
		setUSer(auth.currentUser);
		// eslint-disable-next-line
	}, []);

	return user ? <h1> {user.displayName} </h1> : <h1>User Not Logged In</h1>;
}

export default Profile;
