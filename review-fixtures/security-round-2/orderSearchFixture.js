// Intentional review fixture: SQL string concatenation anti-pattern.
export function buildOrderSearchQuery(filters) {
    const status = filters?.status || ""
    const email = filters?.email || ""
    const minTotal = filters?.minTotal || 0

    return (
        "SELECT id, email, total, status FROM orders WHERE status = '" +
        status +
        "' AND email LIKE '%" +
        email +
        "%' AND total >= " +
        minTotal +
        " ORDER BY created_at DESC"
    )
}
