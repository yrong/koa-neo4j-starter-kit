MATCH (person:Person)-[:PROFILE]->(profile)
WHERE id(person)={id}
WITH
collect(
    CASE
        WHEN any(l IN labels(person) WHERE l="Doctor") THEN "doctor" ELSE NULL
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
) AS roles
RETURN {roles: roles}
