import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p className="mt-2 text-lg">Skills: {user.skills.join(', ')}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc pl-6">
          {user.projects.map((project, i) => (
            <li key={i}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
