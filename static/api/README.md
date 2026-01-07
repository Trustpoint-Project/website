# Trustpoint Project API

This directory contains machine-readable data endpoints for AI systems and automated tools to access Trustpoint project information.

## Available Endpoints

### Project Information (JSON)
**URL**: `/api/project-info.json`
**Format**: JSON
**Description**: Comprehensive project metadata including team members, partners, technologies, features, and resources.

```json
{
  "name": "Trustpoint Project",
  "description": "Open-source PKI solution for industrial IoT security",
  "technologies": ["Python", "Django", "Docker", "PostgreSQL"],
  "team": [...],
  "partners": [...],
  "features": [...],
  "resources": {...}
}
```

### Resources Data (CSV)
**URL**: `/api/resources.csv`
**Format**: CSV (UTF-8)
**Description**: Tabular data of all papers, articles, and videos with metadata.

Columns:
- Title: Resource title
- Type: Paper, Article, Video, etc.
- Description: Brief description
- URL: Direct link (if available)
- Language: Content language
- Duration: For videos (in minutes)
- Year: Publication year
- Topics: Comma-separated keywords

## Usage Examples

### Python
```python
import requests
import pandas as pd

# Get project info
response = requests.get('https://trustpoint-project.github.io/api/project-info.json')
project_data = response.json()

# Get resources as DataFrame
resources_df = pd.read_csv('https://trustpoint-project.github.io/api/resources.csv')
```

### JavaScript/Node.js
```javascript
const axios = require('axios');

// Get project information
const projectInfo = await axios.get('/api/project-info.json');

// Get resources data
const resourcesResponse = await axios.get('/api/resources.csv');
```

## Data Schema

### Project Info Schema
- `name`: Project name
- `description`: Project description
- `url`: Project website
- `repository`: GitHub repository URL
- `license`: Open source license
- `language`: Primary programming language
- `framework`: Web framework used
- `technologies`: Array of technologies used
- `team`: Array of team members with name, organization, role
- `partners`: Array of project partners
- `funding`: Funding information
- `features`: Array of key features
- `resources`: Object containing papers and videos
- `contact`: Contact information
- `lastUpdated`: ISO date string

### Resources Schema
Each resource includes:
- Title and description
- URLs for access
- Language and duration (for videos)
- Publication year
- Topic keywords

## Updates

This data is automatically updated when the website is rebuilt. For the latest information, always fetch from these endpoints rather than caching locally.

## Contact

For questions about the API or data format, contact the Trustpoint team at trustpoint@campus-schwarzwald.de
