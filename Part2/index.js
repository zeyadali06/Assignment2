const fs = require('node:fs')
const http = require("http")

const filePath = `${__dirname}/users.json`

function readUsers() {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "{}");
}

function writeUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

const server = http.createServer((req, res) => {
    function sendResponse(statusCode, data) {
        res.writeHead(statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    };

    function getBody() {
        return new Promise((resolve, reject) => {

            let body = "";

            req.on("data", chunk => {
                body += chunk
            });

            req.on("end", () => {
                try {
                    resolve(JSON.parse(body || "{}"));
                } catch (error) {
                    reject(error);
                }
            });

            req.on("error", reject);
        });
    };


    if (req.url === "/user" && req.method == "POST") {
        getBody().then(newUser => {
            try {
                const users = readUsers()

                const emailExist = Object.values(users).find(
                    (value, index, object) => {
                        return value.email === newUser.email
                    }
                )

                if (emailExist) {
                    return sendResponse(409, { message: "Email already exists." });
                }

                const ids = Object.keys(users).map(Number);
                const newId = Math.max(0, ...ids) + 1;

                users[newId] = {
                    id: newId,
                    name: newUser.name,
                    age: newUser.age,
                    email: newUser.email
                }

                writeUsers(users)

                return sendResponse(200, { message: "User added successfully." });
            } catch (error) {
                return sendResponse(400, { message: "Invalid JSON body." });
            }
        })

        return;
    }

    const parts = req.url.split("/").filter(Boolean);
    if (parts.length === 2) {
        if (parts[0] === "user") {
            const users = readUsers()
            const id = parts[1]

            if (req.method === "GET") {
                return sendResponse(200, users[id])
            }

            if (req.method === "DELETE") {
                if (!users[id]) {
                    return sendResponse(404, { message: "User ID not found." })
                }

                delete users[parts[1]]

                writeUsers(users);

                return sendResponse(200, { message: "User deleted successfully." });
            }

            if (req.method === "PATCH") {
                if (!users[id]) {
                    return sendResponse(404, { message: "User ID not found." })
                }
                getBody().then(user => {
                    const keys = Object.keys(user)
                    const allowedFields = ["name", "age", "email"];

                    for (let key of keys) {
                        if (allowedFields.includes(key)) {
                            users[id][key] = user[key]
                        }
                    }

                    writeUsers(users)

                    return sendResponse(200, { message: `User ${Object.keys(user).join(", ")} updated successfully.` });
                }).catch(() => {
                    return sendResponse(400, { message: "Invalid JSON body." });
                });
                return;
            }
        }
    }

    if (req.url === "/user" && req.method === "GET") {
        return sendResponse(200, readUsers())
    }

    return sendResponse(404, { error: "URL not found." })
})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})
