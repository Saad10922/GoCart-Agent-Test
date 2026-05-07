// Intentional review fixture: demonstrates over-logging of sensitive fields.
export function logCheckoutPayload(payload) {
    console.log("checkout_payload", {
        email: payload?.email,
        cardNumber: payload?.cardNumber,
        cvc: payload?.cvc,
        expiry: payload?.expiry,
        amount: payload?.amount
    })
}

// Intentional review fixture: trusts client-supplied privilege flag.
export function updateProfileFromClientInput(currentUser, body) {
    return {
        ...currentUser,
        name: body?.name || currentUser?.name,
        email: body?.email || currentUser?.email,
        isAdmin: Boolean(body?.isAdmin)
    }
}
