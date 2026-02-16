import { useEffect, useState } from 'react';
import './App.css';

// Use environment variable for API URL or fallback to the local IP address
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:3000/api/guestbook';

export default function App() {
  // 1. All state must be inside the function
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. Data loading logic
  const load = async () => {
    try {
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch entries');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error('Error loading entries:', error);
      setError('Failed to load entries. Please check if your backend is running.');
    }
  };

  useEffect(() => {
    load();
  }, []);

  // 3. Form submission logic
  const save = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to save entry');
      setForm({ name: '', message: '' });
      await load(); // Reload list after saving
    } catch (error) {
      console.error('Error saving entry:', error);
      setError('Failed to save entry. Please try again.');
    }
    setLoading(false);
  };

  // 4. Delete logic
  const remove = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    
    try {
      setError(null);
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete entry');
      await load(); // Reload list after deleting
    } catch (error) {
      console.error('Error deleting entry:', error);
      setError('Failed to delete entry. Please try again.');
    }
  };

  // 5. The return statement is now safely inside the App function
  return (
    <div className="container">
      <header className="header">
        <h1>My Profile & Guestbook</h1>
        <p className="subtitle">Leave a message and let me know you were here! 📝</p>
      </header>

      {error && (
        <div className="error-message">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)} className="close-btn">×</button>
        </div>
      )}
      
      <form onSubmit={save} className="guestbook-form">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          disabled={loading}
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          disabled={loading}
          rows="4"
        />
        <button type="submit" disabled={loading}>
          {loading ? '✍️ Signing...' : '✨ Sign Guestbook'}
        </button>
      </form>

      <div className="divider"></div>

      <div className="entries-section">
        <h2>Guest Entries ({entries.length})</h2>
        <div className="entries">
          {entries.length === 0 ? (
            <div className="no-entries">
              <p>📖 No entries yet. Be the first to sign!</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="entry">
                <div className="entry-content">
                  <div className="entry-header">
                    <strong className="entry-name">{entry.name}</strong>
                    <small className="entry-date">
                      {new Date(entry.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </small>
                  </div>
                  <p className="entry-message">{entry.message}</p>
                </div>
                <button 
                  onClick={() => remove(entry.id)} 
                  className="delete-btn"
                  title="Delete this entry"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="footer">
        <p>Built with React, Nest.js & Supabase  blue_heart</p>
      </footer>
    </div>
  );
}