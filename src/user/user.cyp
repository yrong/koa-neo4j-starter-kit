// Takes $username and returns a user object with at least 'id' and 'password'
WITH {id: 2, user_name: {username}, hash: "test"} AS user
// Above serves as mock, should be gathered from real data
RETURN {id: user.id, password: user.hash}
