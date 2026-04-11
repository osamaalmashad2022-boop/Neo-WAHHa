// Neo-WAHHa — Users Database
const USERS_DB = {};
for (let i = 1; i <= 100; i++) {
  USERS_DB[`user${i}`] = { username: `user${i}`, password: '123', displayName: `متعلم ${i}` };
}
