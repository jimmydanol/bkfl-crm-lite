import { resolve } from 'node:path'
import { runSourceBackedEvaluation } from './run-50-debtor-crm-agentic-evaluation.mjs'

const repoRoot = resolve(new URL('..', import.meta.url).pathname.replace(/^\/(.:)/, '$1'))
const result = await runSourceBackedEvaluation({ repoRoot, count: 50 })

console.log(JSON.stringify(result.summary, null, 2))
