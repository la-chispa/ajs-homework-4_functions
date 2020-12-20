export const character = {
  name: 'Маг',
  health: '90',
};

export default function checkHealthStatus(data) {
  let healthStatus = 0;
  if (data.health > 50 && data.health <= 100) {
    healthStatus = 'healthy';
  }
  if (data.health <= 50 && data.health >= 15) {
    healthStatus = 'wounded';
  }
  if (data.health < 15 && data.health > 0) {
    healthStatus = 'critical';
  }
  return healthStatus;
}
