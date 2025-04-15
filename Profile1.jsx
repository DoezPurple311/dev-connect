// Bổ sung form để thêm dự án mới:
<form
  onSubmit={async (e) => {
    e.preventDefault();
    const project = e.target.project.value;
    await fetch(`/api/users/${id}/add-project`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project })
    });
    window.location.reload();
  }}
  className="mt-4"
>
  <input name="project" placeholder="New Project" className="border p-2 mr-2" />
  <button className="bg-green-600 text-white px-3 py-1">Add</button>
</form>

// server/index.js bổ sung:
app.post('/api/users/:id/add-project', async (req, res) => {
  const user = await User.findById(req.params.id);
  user.projects.push(req.body.project);
  await user.save();
  res.json({ message: 'Project added' });
});
