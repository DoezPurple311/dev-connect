<input
  className="border px-3 py-1 mb-4"
  placeholder="Search by skill..."
  onChange={(e) => {
    const keyword = e.target.value.toLowerCase();
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.filter(u => u.skills.join(',').toLowerCase().includes(keyword))));
  }}
/>
