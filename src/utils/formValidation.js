const validateEmail = email => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? '' : 'ErrorInvalidEmail';
};

export const validate = (id, response, data) => {
  if (id !== 'otherInformation') {
    const error = !response[id]
      ? 'ErrorRequiredField'
      : id === 'email'
      ? validateEmail(response.email)
      : '';

    return data.map(input => (input.id === id ? { ...input, error } : input));
  }
};
