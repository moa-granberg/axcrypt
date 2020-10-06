const getPasswordSuggestion = async strength => {
  let resp;

  if (strength === 'weak') {
    resp = await fetch(
      'https://account.axcrypt.net/api/global/passwords/suggestion/1',
      { mode: 'no-cors' }
    );
    resp = await resp.json();
    return resp.suggestion;
  } else if (strength === 'medium') {
    resp = await fetch(
      'https://account.axcrypt.net/api/global/passwords/suggestion/2',
      { mode: 'no-cors' }
    );

    resp = await resp.json();
    return resp.suggestion;
  } else if (strength === 'strong') {
    resp = await fetch(
      'https://account.axcrypt.net/api/global/passwords/suggestion/3',
      { mode: 'no-cors' }
    );

    resp = await resp.json();
    return resp.suggestion;
  } else {
    return 'Invalid argument, valid arguments are "strong", "medium" or "weak"';
  }
};

export const getPasswords = async () => {
  let resp = {};

  resp.weak = await getPasswordSuggestion('weak');
  resp.medium = await getPasswordSuggestion('medium');
  resp.strong = await getPasswordSuggestion('strong');

  return resp;
};
