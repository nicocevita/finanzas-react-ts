export function getCurrecyARS(amount: number){
return amount?.toLocaleString('es-AR', { style: "currency", currency: 'ARS' })
}