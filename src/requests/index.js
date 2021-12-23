export const getUsersRequest = async() => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=150');
      const answer = await response.json();
      return answer.results
    } catch (error) {
      console.log(error.message)
      return []
    }
}