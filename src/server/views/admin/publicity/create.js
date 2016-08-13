export function create(options = {}) {
    return html`
        <form method="${options.data ? 'PUT' : 'POST'}" action="/admin/publicity/${options.data ? options.data._id : ''}">
            <legend>
                <h1>Create Publicity</h1>
            </legend>
            <div class="form-group">
                <button type="submit">Save</button>
            </div>
        </form>
    `;
}
