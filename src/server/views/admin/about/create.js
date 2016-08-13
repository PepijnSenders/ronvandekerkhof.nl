export function create(options = {}) {
    return html`
        <form method="${options.data ? 'PUT' : 'POST'}" action="/admin/about/${options.data ? options.data._id : ''}">
            <legend>
                <h1>Create About</h1>
            </legend>
            <div class="form-group">
                <label for="title">
                    Title
                    <input type="text" name="title" id="title" value="${options.data ? options.data.title : ''}">
                </label>
            </div>
            <div class="form-group">
                <label for="text">
                    Text
                    <input type="text" name="text" id="text" value="${options.data ? options.data.text : ''}">
                </label>
            </div>
            <div class="form-group">
                <button type="submit">Save</button>
            </div>
        </form>
    `;
}
