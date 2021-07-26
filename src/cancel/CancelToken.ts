import { Canceler, CancelExecutor, CancelToken as ICancelToken, CancelTokenSource } from '../types'
import Cancel from './Cancel'

interface ResolvePromise {
  (message: Cancel): void
}

export default class CancelToken implements ICancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise

    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve
    })

    executor((message) => {
      if (this.reason) {
        return
      }
      this.reason = new Cancel(message)
      resolvePromise(this.reason)
    })
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler
    let token = new CancelToken(c => {
      cancel = c
    })

    return {
      cancel,
      token
    }
  }

}
