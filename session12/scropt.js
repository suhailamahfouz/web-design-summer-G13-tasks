var users = [];

function addUser() {
    var id = prompt("Enter user ID");
    if (!id) {
        alert("User ID is required!");
        return;
    }

    var name = prompt("Enter user name");
    if (!name) {
        alert("User name is required!");
        return;
    }

    var balance = prompt("Enter balance");
    if (!balance || isNaN(parseFloat(balance))) {
        alert("Balance must be a valid number!");
        return;
    }

    var existing = users.find(user => user.id === id);
    if (existing) {
        alert("User with this ID already exists!");
        return;
    }

    users.push({
        id: id,
        name: name,
        balance: parseFloat(balance)
    });

    alert("User added successfully!");
}

function updateUserBalance() {
    var id = prompt("Enter user ID to update balance");
    if (!id) {
        alert("User ID is required!");
        return;
    }

    var user = users.find(user => user.id === id);
    if (!user) {
        alert("User not found!");
        return;
    }

    var newBalance = prompt("Enter new balance", user.balance);
    if (!newBalance || isNaN(parseFloat(newBalance))) {
        alert("Balance must be a valid number!");
        return;
    }

    user.balance = parseFloat(newBalance);
    alert("Balance updated successfully!");
}

function deleteUser() {
    var id = prompt("Enter user ID to delete");
    if (!id) {
        alert("User ID is required!");
        return;
    }

    var index = users.findIndex(user => user.id === id);
    if (index === -1) {
        alert("User not found!");
        return;
    }

    if (confirm("Delete user: " + users[index].name + "?")) {
        users.splice(index, 1);
        alert("User deleted successfully!");
    }
}

function showUsers() {
    if (users.length === 0) {
        console.log("No users available.");
    } else {
        console.table(users);
    }
}

function startApp() {
    var count = parseInt(prompt("How many users do you want to add?"));

    if (!isNaN(count) && count > 0) {
        for (var i = 0; i < count; i++) {
            addUser();
        }
    }

    showUsers();

    while (true) {
        var action = prompt(
            "Choose an action:\n1 - Add User\n2 - Update Balance\n3 - Delete User\n4 - Show Users\n5 - Exit"
        );

        switch (action) {
            case "1":
                addUser();
                break;
            case "2":
                updateUserBalance();
                break;
            case "3":
                deleteUser();
                break;
            case "4":
                showUsers();
                break;
            case "5":
                alert("Exiting application.");
                showUsers();
                return;
            default:
                alert("Invalid choice!");
        }
    }
}

startApp();