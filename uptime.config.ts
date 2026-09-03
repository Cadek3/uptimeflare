// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "YourWebGeeks Website Monitoring",

  links: [
    { link: 'https://yourwebgeeks.com/', label: 'YourWebGeeks' },
    { link: 'mailto:kinsey@yourwebgeeks.com', label: 'Email', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'helpnowaz',
      name: 'HelpNowAZ.org',
      method: 'GET',
      target: 'https://helpnowaz.org/',
      tooltip: 'HelpNowAZ website',
      statusPageLink: 'https://helpnowaz.org/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
    'User-Agent': 'YourWebGeeks-UptimeMonitor/1.0',
    },
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
