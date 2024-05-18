import { getOctokit } from '@actions/github'
import { branch, conclusion, owner, repo, token, workflow as workflowFilter } from './inputs.js'

const octokit = getOctokit(token)

export const getWorkflowId = async () => {
  for await (const { data: workflows } of octokit.paginate.iterator(
    octokit.rest.actions.listRepoWorkflows,
    {
      owner,
      repo,
    },
  )) {
    for (const workflow of workflows) {
      if (workflow.name === workflowFilter || workflow.path === workflowFilter) {
        return workflow.id
      }
    }
  }

  return null
}

export const getWorkflowLastRun = async (workflowId: number) => {
  for await (const { data: runs } of octokit.paginate.iterator(
    octokit.rest.actions.listWorkflowRuns,
    {
      owner,
      repo,
      workflow_id: workflowId,
    },
  )) {
    for (const run of runs) {
      if (run.head_branch === branch && run.conclusion === conclusion) {
        return run
      }
    }
  }

  return null
}
