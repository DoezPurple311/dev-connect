import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <Link key={user._id} to={`/profile/${user._id}`} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>{user.skills.join(', ')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
