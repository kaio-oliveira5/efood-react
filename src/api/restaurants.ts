export const getRestaurants = async () => {
    const response = await fetch(
        ' https://api-ebac.vercel.app/api/efood/restaurantes'
    )

    const data = await response.json()
    return data
}