import { useState } from 'react';
import axios from 'axios';

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/users'); // Substitua com sua URL de API
      setUsers(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/users', userData); // Substitua com sua URL de API
      setUsers([...users, response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return {
    users,
    loading,
    error,
    fetchUsers,
    registerUser,
    handleChange
  };
};
