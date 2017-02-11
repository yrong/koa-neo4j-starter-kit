MATCH (a:Article)
MATCH (a)-[:AUTHOR]->(au)
RETURN a AS article, au AS author
ORDER BY a.createdAt DESC
SKIP $skip LIMIT $limit
