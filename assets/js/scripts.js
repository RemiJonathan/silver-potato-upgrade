function fillWorksList(json) {
    const worksListSection = document.getElementById("works_list");

    // Loop through each entry in the JSON array
    for (let i = 0; i < json.length; i++) {
        const work = json[i];

        // Create the HTML elements for the work entry
        const workDiv = document.createElement("div");
        workDiv.id = work.id;

        const workTitle = document.createElement("h4");
        workTitle.textContent = work.title;

        const workImage = document.createElement("img");
        workImage.src = work.imageSrc;
        workImage.alt = work.altText;

        const workShortDescription = document.createElement("p");
        workShortDescription.textContent = work.shortDescription;

        const workLearnMoreLink = document.createElement("a");
        workLearnMoreLink.href = work.link;
        workLearnMoreLink.textContent = work.linkText;
        workLearnMoreLink.classList.add("button", "small");

        const workActionsList = document.createElement("ul");
        workActionsList.classList.add("actions", "animated", "spinX");

        const workActionsListItem = document.createElement("li");
        workActionsListItem.appendChild(workLearnMoreLink);

        workActionsList.appendChild(workActionsListItem);

        // Append the elements to the work entry
        workDiv.appendChild(workTitle);
        workDiv.appendChild(workImage);
        workDiv.appendChild(workShortDescription);
        workDiv.appendChild(workActionsList);

        // Append the work entry to the works list section
        worksListSection.appendChild(workDiv);
    }
}

function retrieveJSONContent(path) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonContent = JSON.parse(xhr.responseText);
            fillWorksList(jsonContent);
        }
    };
    xhr.send();
}