# Last Workflow Run

## Usage

```yaml
- name: Get last workflow run
  id: last_workflow_run
  uses: actions-pro/last-workflow-run@v1

- run: echo ${{ steps.last_workflow_run.outputs.sha }}
```
