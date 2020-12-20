import checkHealthStatus from '../app';

test('should show "healthy" status', () => {
  const character = {
    name: 'Маг',
    health: '100',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('healthy');
});

test('should show "healthy" status', () => {
  const character = {
    name: 'Маг',
    health: '51',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('healthy');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '50',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '49',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '16',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '15',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('wounded');
});

test('should show "critical" status', () => {
  const character = {
    name: 'Маг',
    health: '14',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('critical');
});

test('should show "critical" status', () => {
  const character = {
    name: 'Маг',
    health: '1',
  };

  const received = checkHealthStatus(character);

  expect(received).toBe('critical');
});
