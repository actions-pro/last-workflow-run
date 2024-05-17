import { getInput } from '@actions/core'

export const branch = getInput('branch', { required: true })

export const conclusion = getInput('conclusion', { required: true })

export const token = getInput('token', { required: true })

export const [owner, repo] = getInput('repository', { required: true }).split('/') as [
  string,
  string,
]

export const workflow = getInput('workflow', { required: true })
