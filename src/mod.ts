import { setFailed, setOutput } from '@actions/core'
import { exit } from 'node:process'
import { getWorkflowId, getWorkflowLastRun } from './github-api.js'
import { workflow } from './inputs.js'

const main = async () => {
  const workflowId = await getWorkflowId()

  if (!workflowId) {
    setFailed(`Unable to find workflow id for workflow: "${workflow}"`)
    exit()
  }

  const run = await getWorkflowLastRun(workflowId)

  if (run) {
    setOutput('sha', run.head_sha)
  }
}

main()
