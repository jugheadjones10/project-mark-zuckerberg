import http from './http';
import socket from './socket';

/* Actions */

const getUsers = headers => socket.get('/users', undefined, headers);

const createUser = (data, headers) => socket.post('/users', data, headers);

const getCurrentUser = headers => socket.get('/users/me', undefined, headers);

const updateUser = (id, data, headers) => socket.patch(`/users/${id}`, data, headers);

const updateUserEmail = (id, data, headers) => socket.patch(`/users/${id}/email`, data, headers);

const updateUserPassword = (id, data, headers) =>
  socket.patch(`/users/${id}/password`, data, headers);

const uploadUserAvatar = (id, file, headers) =>
  http.post(
    `/users/${id}/upload-avatar`,
    {
      file,
    },
    headers,
  );

const deleteUser = (id, headers) => socket.delete(`/users/${id}`, undefined, headers);

export default {
  getUsers,
  createUser,
  getCurrentUser,
  updateUser,
  updateUserEmail,
  updateUserPassword,
  uploadUserAvatar,
  deleteUser,
};
