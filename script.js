document.addEventListener('DOMContentLoaded', function () {
    const reminderNameInput = document.getElementById('reminder-name');
    const reminderDatetimeInput = document.getElementById('reminder-datetime');
    const addReminderButton = document.getElementById('add-reminder');
    const reminderList = document.getElementById('reminder-list');

    // Function to create a new reminder element
    function createReminderElement(name, datetime) {
        // Create a container for the reminder item
        const reminderContainer = document.createElement('div');
        reminderContainer.classList.add('reminder-item');

        // Create the text content for the reminder
        const reminderText = document.createElement('div');
        reminderText.classList.add('reminder-text');

        // Apply styles to the text
        reminderText.style.fontWeight = 'bold'; // Example: Make the text bold
        reminderText.style.color = '#333'; // Example: Set text color
        // You can add more style properties as needed
        const datetimeString = "2023-09-06T21:39";

        // Split the datetime string into date and time parts
        const [datePart, timePart] = datetimeString.split('T');
        
        // Format the date and time as desired
        const formattedDatetime = `${datePart} {${timePart}}`;
        
        // Now, formattedDatetime will be in the format "2023-09-06 21:39"
        console.log(formattedDatetime);
        reminderText.textContent = `Name: ${name} || Datetime: ${formattedDatetime} `;

        // Create a container for the buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function () {
            const newName = prompt('Edit reminder name:', name);
            const newDatetime = prompt('Edit reminder datetime:', formattedDatetime);

            if (newName !== null && newDatetime !== null) {
                reminderText.textContent = `Name: ${newName}, Datetime: ${newDatetime}`;
            }
        });

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            reminderContainer.remove();
        });

        // Append the buttons to the button container
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        // Append the text and button container to the reminder container
        reminderContainer.appendChild(reminderText);
        reminderContainer.appendChild(buttonContainer);

        return reminderContainer;
    }

    addReminderButton.addEventListener('click', function () {
        const name = reminderNameInput.value;
        const datetime = reminderDatetimeInput.value;

        if (name && datetime) {
            const listItem = createReminderElement(name, datetime);
            reminderList.appendChild(listItem);

            // Clear input fields
            reminderNameInput.value = '';
            reminderDatetimeInput.value = '';
        }
    });
});
