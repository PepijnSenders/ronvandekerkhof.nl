export function create(options = {}) {
    return html`
        <form method="POST" action="/admin/publicity/${options.data ? options.data._id : ''}" enctype="multipart/form-data">
            <legend>
                <h1>Create Publicity</h1>
            </legend>
            <div class="form-group">
                <label for="title">
                    Title
                    <input class="form-control" type="text" name="title" id="title" value="${options.data ? options.data.title : ''}">
                </label>
            </div>
            <div class="form-group">
                <label for="description">
                    Description
                    <textarea class="form-control" type="text" name="description" id="description">${options.data ? options.data.description : ''}</textarea>
                </label>
            </div>
            <div class="form-group">
                <label for="link">
                    Link
                    <input class="form-control" type="text" name="link" id="link" value="${options.data ? options.data.link : ''}">
                </label>
            </div>
            ${options.data && options.data.images ?
                options.data.images.map((image, index) => html`
                    <div class="form-group">
                        <a href="${image.link}" target="_blank">
                            <img src="${image.link}" width="200">
                        </a>
                        <a class="btn" href="/admin/publicity/${options.data._id}/image/${index}">
                            Delete image
                        </a>
                    </div>
                `).join('') : ''
            }
            <div class="form-group">
                <label for="images">
                    Upload images
                    <input type="file" name="images" id="images" multiple>
                </label>
            </div>
            <div class="form-group">
                <button type="submit">Save</button>
            </div>
        </form>
    `;
}
