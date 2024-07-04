// export gridCard
const gridCard = (index,title,content,date)=>{ 
    return `
        <!-- card -->
        <div class="container" > 
            <div class="diary-entry">
                <h2>Title | ${title}</h2>
                <div class="card-content">
                    <!-- description -->
                    <label class="card-label" for="description">Description</label>
                    <div class="card-description" id="description" 
                    name="description" readonly>
                    ${content}
                    </div>
                    <!-- date -->
                    <label for="date">Date</label>
                    <input class="card-date" type="date" value="${date}" id="date" name="date">
                    <!-- button -->
                    <div class="button">
                        <a href="./pages/edit.html?${index}">
                            <img src="./assets/icons/edit button.svg" alt="edit button">
                        </a>
                        <a href="./pages/view-delete.html?${index}">
                            <img src="./assets/icons/delete button.svg" alt="delete button">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}
// export gridCard
export {gridCard};