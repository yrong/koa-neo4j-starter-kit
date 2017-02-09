MATCH (a:Article)
MATCH (a)-[:AUTHOR]->(au)
RETURN a AS article, au AS author
ORDER BY a.created_at DESC
SKIP $skip LIMIT $limit
