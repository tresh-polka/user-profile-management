

function UserProfileManager() {
    const userProfileManager = {
        users: [],

        addUser({name, email}) {
            let user = {id: 0, name, email};
            let usersDB = this.users;
            function addId() {
                const usersId = usersDB
                .map((user) => user.id)
                .sort((user1, user2) => {
                    if (user1.id < user2.id) {
                      return 1;
                    }
                    if (user1.id > user2.id) {
                      return -1;
                    }
                  });
                return (usersId[0] || 0) + 1;
            }
            const id = addId();
            user.id = id;
            usersDB.push(user);
            return usersDB;
        },

        removeUser(userId) {
            const usersId = this.users.map((user) => user.id)
            const index = usersId.indexOf(userId)
            const users = this.users.splice(index, 1)
            return users;
        },

        updateUser(userId, newInfo) {
            const user = this.users.map((user) => {
                if (user.id === userId) {
                    if (newInfo.name) {
                        user.name = newInfo.name;
                    };
                    if (newInfo.email) {
                        user.email = newInfo.email;
                    };
                };
            });
            return this.users;
        },

        findUserByName(name) {
            const usersByName = this.users.filter((user) => user.name.includes(name))
            return usersByName
        },
        
        getAllUsers() {
            console.log('Список пользователей:');
            return this.users;
        }
    };
    return userProfileManager
}


const profileManager = new UserProfileManager();


profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers());

profileManager.updateUser(1, { name: "Alicia" });
profileManager.removeUser(2);
console.log(profileManager.getAllUsers());

console.log(profileManager.findUserByName("Ali"));



// Вот нормальный рандомайзер ID, а не это вот всё

// let users = this.users.map((user) => user.id);
// function addId() {
//     let newId = Math.floor(Math.random() * 999999);
//     if (users.find((user) => user.id === newId)) {
//         addId();
//     } else {
//         return newId;
//     }
// }


// removeUser(userId) {
//     const users = this.users.filter((user) => user.id !== userId)
//     return users
// },