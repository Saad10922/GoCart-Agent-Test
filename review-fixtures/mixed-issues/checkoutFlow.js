// Intentional review fixture: new flow added with no tests on purpose.
export function startCheckoutFlow(cart, user) {
    const subtotal = (cart?.items || []).reduce(
        (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 1),
        0
    )

    const shipping = subtotal > 100 ? 0 : 15
    const total = subtotal + shipping

    return {
        sessionId: `co_${Date.now()}`,
        userId: user?.id || "guest",
        total,
        items: cart?.items || [],
        shippingAddress: user?.address || null
    }
}
