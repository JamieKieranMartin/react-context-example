// Separate logic to keep things clean

export const _post = async (data) =>
  await fetch(``, {
    method: 'POST',
    body: JSON.stringify(data)
  });

export const _put = async (id, data) =>
  await fetch(`${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });

export const _delete = async (id) =>
  await fetch(`${id}`, {
    method: 'DELETE'
  });
