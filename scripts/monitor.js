/**
 * System Monitoring Script - Production
 * System Monitoring Script - Development
 * Supports both production and development modes
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000, // 1 minute
    alertThreshold: 80,
    debugMode: false,
    verboseLogging: false,
    metricsEndpoint: 'http://localhost:8080/metrics'
  },
  development: {
    interval: 5000, // 5 seconds
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true,
    metricsEndpoint: 'http://localhost:3000/metrics'
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log('DevOps Simulator - Monitor');
console.log(`Environment: ${ENV}`);
console.log(`Debug Mode: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated metric checks
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');

  // Development-specific details
  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }

  console.log('System Status: HEALTHY');

  if (config.verboseLogging) {
    console.log(`Next check in ${config.interval} ms`);
  }
}

console.log(`Monitoring every ${config.interval} ms`);
setInterval(checkSystemHealth, config.interval);

// Run the first check immediately
checkSystemHealth();
