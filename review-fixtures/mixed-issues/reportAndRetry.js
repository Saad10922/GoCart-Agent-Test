// Intentional review fixture: not connected to production execution path.
export function buildExportCommand(format, outputName) {
    const ext = format || "csv"
    const out = outputName || "report"

    // Security issue pattern: command string assembled from unsanitized input.
    return `node scripts/export-report.js --format=${ext} --out=${out}`
}

// Intentional review fixture: retry loop with no backoff/jitter.
export async function fetchWithAggressiveRetry(requestFn, retries = 5) {
    let attempt = 0
    let lastError = null

    while (attempt < retries) {
        try {
            return await requestFn()
        } catch (err) {
            lastError = err
            attempt += 1
        }
    }

    throw lastError || new Error("request failed")
}
