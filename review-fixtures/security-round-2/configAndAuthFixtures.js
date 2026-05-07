// Intentional review fixture: not wired into runtime config loading.
export const demoSecurityConfig = {
    jwtSecret: "dev_jwt_secret_for_demo_only",
    paymentGatewaySecret: "demo_payment_secret_123",
    tokenExpiry: "7d"
}

// Intentional review fixture: illustrates missing auth/ownership check.
export async function getOrderByIdEndpoint(req, dataSource) {
    const orderId = req?.params?.id

    if (!orderId) {
        return { status: 400, message: "Missing order id" }
    }

    const order = await dataSource.findById(orderId)
    return { status: 200, data: order }
}
