MATCH (person:Person)-[:PROFILE]->(profile)
WHERE profile.user_name = {username}
WITH
collect(
    CASE
        WHEN any(l IN labels(person) WHERE l="Author") THEN "author" ELSE NULL
    END
) +
collect(
    CASE
        WHEN any(l IN labels(person) WHERE l="User") THEN "user" ELSE NULL
    END
) +
collect(
    CASE
        WHEN profile.user_name="admin" THEN "admin" ELSE NULL
    END
) AS roles, person, profile
RETURN {roles: roles,id: id(person), username: profile.user_name, first_name: person.first_name, last_name: person.last_name, salt: profile.password_hash}

