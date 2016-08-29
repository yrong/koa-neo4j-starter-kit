MATCH (u:Person)-[:PROFILE]->(p)
WHERE p.user_name = {username}
RETURN {id: id(u), password_hash: p.password_hash}
