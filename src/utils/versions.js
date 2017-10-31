/**
 * maintain version information here
 */
export const versions = [
  {
    number: '1.2.0',
    changes: [
      'profile: you can now set personal data'
    ]
  },
  {
    number: '1.1.1',
    changes: [
      'fix a bug where you could register and login with just one character and no password'
    ]
  },
  {
    number: '1.1.0',
    changes: [
      'enter on registration or login now triggers submit',
      'a hint on topics explains how to vote or create one',
      'a label under votes appears if you voted for a topic',
      'fix a bug where registration was case sensitive'
    ]
  },

  {
    number: '1.0.2',
    changes: [
      'logout now triggers deletion of auth token',
      'design refinements (cards, font, mobile view)',
      'fixed that submenu would not open on mobile'
    ]
  },

  {
    number: '1.0.1',
    changes: [
      'added versions page',
      'fixed that empty topics could be created'
    ]
  }
];
