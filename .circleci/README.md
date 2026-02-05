# CircleCI Pipeline Documentation

## Overview

This pipeline automatically builds, scans, and pushes Docker images with **automatic failover** between self-hosted and cloud runners.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SETUP WORKFLOW                           │
│                    (CircleCI Cloud Runner)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Health Check Job                                           │
│      ├── Query CircleCI Runner API                              │
│      ├── Check if self-hosted runner connected < 5 min ago      │
│      └── Generate appropriate pipeline config                   │
│                                                                 │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────┐
        │   Runner Available?     │
        └─────────────┬───────────┘
                      │
         ┌────────────┴────────────┐
         │                         │
         ▼                         ▼
   ┌───────────┐            ┌───────────┐
   │    YES    │            │    NO     │
   └─────┬─────┘            └─────┬─────┘
         │                        │
         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│  SELF-HOSTED    │      │  CLOUD RUNNER   │
│  ravi-ci/       │      │  ubuntu-2204    │
│  my-runner      │      │  medium         │
└────────┬────────┘      └────────┬────────┘
         │                        │
         └──────────┬─────────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │   BUILD PIPELINE    │
         ├─────────────────────┤
         │ 1. Checkout code    │
         │ 2. Docker login     │
         │ 3. Build image      │
         │ 4. Trivy scan       │
         │ 5. ZAP scan *       │
         │ 6. Push to registry │
         └─────────────────────┘

* ZAP scan currently commented out for testing
```

## How Health Check Works

### API Query
```bash
curl -s -X GET \
  "https://runner.circleci.com/api/v3/runner?resource-class=ravi-ci/my-runner" \
  -H "Circle-Token: ${CIRCLECI_API_TOKEN}"
```

### Response Example
```json
{
  "items": [{
    "resource_class": "ravi-ci/my-runner",
    "hostname": "ravishan-circle-ci",
    "last_connected": "2026-02-05T11:19:04.31102Z"
  }]
}
```

### Decision Logic
| Condition | Result |
|-----------|--------|
| No runners registered | Use cloud runner |
| `last_connected` > 5 minutes ago | Use cloud runner |
| `last_connected` < 5 minutes ago | Use self-hosted runner |

## Pipeline Stages

### 1. Docker Login
Authenticates with Docker Hub using credentials from CircleCI context.

### 2. Build Docker Image
```bash
docker build -t docker.io/ravishandoc/sri-lanka-tourism-frontend:latest .
```

### 3. Trivy Security Scan
Scans the built image for vulnerabilities:
- Checks for HIGH and CRITICAL severity issues
- Fails the build if vulnerabilities are found
- Ignores unfixed vulnerabilities

### 4. OWASP ZAP Scan (Currently Disabled)
When enabled:
- Starts the application container
- Runs baseline security scan against the running app
- Generates HTML report as artifact

### 5. Push to Registry
Pushes the scanned image to Docker Hub.

## Best Practices Followed

### Security
| Practice | Implementation |
|----------|----------------|
| Image scanning | Trivy scans for CVEs before push |
| DAST scanning | OWASP ZAP baseline scan (when enabled) |
| Credential management | Using CircleCI contexts, not hardcoded |
| Minimal exposure | Docker logout after push |

### Reliability
| Practice | Implementation |
|----------|----------------|
| Automatic failover | Health check with cloud fallback |
| Container cleanup | Removes stale containers before/after ZAP scan |
| Graceful failure handling | `|| true` patterns prevent false failures |
| Artifact preservation | Security reports stored as artifacts |

### Maintainability
| Practice | Implementation |
|----------|----------------|
| DRY principle | Reusable commands avoid code duplication |
| Clear naming | Descriptive job and step names |
| Branch filtering | Only runs on specified branches |

## Configuration Requirements

### CircleCI Project Settings

1. **Enable Dynamic Configuration**
   - Project Settings → Advanced → Enable "Dynamic config using setup workflows"

2. **Environment Variables**
   - `CIRCLECI_API_TOKEN` - For runner health check API

3. **Context: docker-hub-credentials**
   - `DOCKER_USERNAME` - Docker Hub username
   - `DOCKER_PASSWORD` - Docker Hub password/token

### Self-Hosted Runner
- Resource class: `ravi-ci/my-runner`
- Must have Docker installed
- Must have network access to Docker Hub

## Production Readiness Assessment

### Currently Ready
- [x] Automated security scanning (Trivy)
- [x] Credential management via contexts
- [x] Automatic runner failover
- [x] Container cleanup for self-hosted runners
- [x] Branch filtering

### Recommended Before Production

| Item | Priority | Description |
|------|----------|-------------|
| Enable ZAP scan | High | Uncomment ZAP scan for DAST security testing |
| Add image tagging | High | Tag images with `${CIRCLE_SHA1}` for traceability |
| Add deployment stage | High | Add deployment to staging/production |
| Notification | Medium | Add Slack/email notifications on failure |
| Manual approval | Medium | Add approval gate before production deploy |
| Caching | Low | Cache Docker layers for faster builds |

### Suggested Production Config Additions

```yaml
# Image tagging with commit SHA
docker build -t myimage:latest -t myimage:${CIRCLE_SHA1} .

# Slack notification on failure
- slack/notify:
    event: fail
    channel: deployments

# Manual approval before production
- hold:
    type: approval
    requires:
      - build-and-push
- deploy-production:
    requires:
      - hold
```

## Quick Commands

### Trigger with Cloud Runner (Manual Override)
```bash
curl -X POST https://circleci.com/api/v2/project/github/YOUR_ORG/YOUR_REPO/pipeline \
  -H "Circle-Token: $CIRCLECI_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"branch": "main"}'
```

### Check Runner Status
```bash
curl -s -X GET \
  "https://runner.circleci.com/api/v3/runner?resource-class=ravi-ci/my-runner" \
  -H "Circle-Token: $CIRCLECI_API_TOKEN" | jq
```

## File Structure

```
.circleci/
├── config.yml    # Main pipeline configuration
└── README.md     # This documentation
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Container name already in use" | Cleanup step handles this automatically |
| Runner shows offline incorrectly | Check if `last_connected` > 5 min, verify runner service |
| Health check fails | Verify `CIRCLECI_API_TOKEN` is set in project |
| Trivy scan fails | Review CVEs, update base image or add exceptions |
