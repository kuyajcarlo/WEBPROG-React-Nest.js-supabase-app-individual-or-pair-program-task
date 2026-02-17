import { useEffect, useState } from 'react';
import './App.css';

// 1. Updated: Use the Vercel Environment Variable for the base URL
// It will use your Backend URL in production and localhost:3000 during local dev
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const API_URL = `/api/guestbook`;
export default function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      await load(); 
    } catch (error) {
      console.error('Error saving entry:', error);
      setError('Failed to save entry. Please try again.');
    }
    setLoading(false);
  };

  const remove = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    
    try {
      setError(null);
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete entry');
      await load(); 
    } catch (error) {
      console.error('Error deleting entry:', error);
      setError('Failed to delete entry. Please try again.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>My Profile & Guestbook</h1>
 <p className="subtitle">Hi, My name is John Carlo E Baracena,</p>

<p className="subtitle">Leave a message and let me know you were here!</p>
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
          {loading ? ' Signing...' : 'Sign Guestbook'}
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
        <p>Built with React, Nest.js & Supabase 💙</p>
      </footer>
    </div>
  );
}
