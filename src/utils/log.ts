const log = (title: string, ...args: any[]) => {
  console.log(`【🕹️${title}】:`, ...args)
}

const logTx = (...args: any[]) => {
  console.log(`【📒 Tx】:`, ...args)
}

const logNet = (...args: any[]) => {
  console.log(`【🛜 Net】:`, ...args)
}

export { log, logTx, logNet }
