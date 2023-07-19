export const fetchTransactions = async () => {
  try {
    const response = await fetch('/data/transactions.json')
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error fetching transactions')
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching transactions')
  }
}
