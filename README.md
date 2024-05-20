# Last Workflow Run

This actions attempts to find the git `sha` of the last successful workflow run. This is particularly useful when attempting to determine what files have been affected or changed.

## Usage

```yaml
- name: Get last workflow run
  id: last-workflow-run
  uses: actions-pro/last-workflow-run@v1

- run: echo ${{ steps.last-workflow-run.outputs.sha }}
```
