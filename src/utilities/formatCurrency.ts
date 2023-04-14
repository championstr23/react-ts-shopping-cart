const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "COP",
    style: "currency"
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATER.format(number)
}