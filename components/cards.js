// export input card 
export const card = (placeholder, btn_1, btn_2) => {
    return `
        <div class="create-container"> 
            <form class="form-container">
                <div class="title">
                    <h1 class="create-title">Title:</h1>
                    <label class="title-label" for="title"></label>
                    <input class="title-input" required id="title" name="title" placeholder="${placeholder}"></input>
                </div>
                <div class="form-content">
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-description" required id="description" name="description" rows="10"></textarea>
                    <label class="date-label" for="date">Date</label>
                    <input class="form-date" required type="date" id="date" name="date">
                    <div class="button">
                        <button class="btn" id="saveBtn" type="submit">${btn_1}</button>
                        <button type="button" class="btn" id="clearBtn">${btn_2}</button>
                    </div>
                </div>
            </form>
    </div>
    `;
};
