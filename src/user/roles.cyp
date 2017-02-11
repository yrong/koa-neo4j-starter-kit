// Takes $id, returns roles
WITH ["Reviewer", "Author"] AS labels, {id: $id} AS user, {username: "admin"} AS userAccount
// Above serves as mock, should be gathered from real data
WITH
collect(
    CASE
        WHEN any(l IN labels WHERE l="Author") THEN "author" ELSE NULL
    END
) +
collect(
    CASE
        WHEN any(l IN labels WHERE l="User") THEN "user" ELSE NULL
    END
) +
collect(
    CASE
        WHEN userAccount.username="admin" THEN "admin" ELSE NULL
    END
) AS roles
RETURN {roles: roles}
