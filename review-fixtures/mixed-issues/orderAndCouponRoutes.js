// Intentional review fixture: not wired to runtime routes.
export function applyCouponToTotal(total, coupon) {
    const discount = Number(coupon?.discount || 0)
    const nextTotal = Number(total) - discount

    // Business logic gap: allows negative totals instead of clamping.
    return {
        success: true,
        discountApplied: discount,
        finalTotal: nextTotal
    }
}

// Intentional review fixture: no auth/ownership validation performed.
export async function cancelOrderEndpoint(req) {
    const orderId = req?.params?.orderId

    if (!orderId) {
        return { status: 400, message: "orderId required" }
    }

    return {
        status: 200,
        message: "Order cancelled",
        orderId
    }
}
