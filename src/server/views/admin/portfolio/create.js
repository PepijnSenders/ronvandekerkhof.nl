import fill from 'lodash/fill';

export function create(options = {}) {

    return html`
        <form method="POST" action="/admin/portfolio/${options.data ? options.data._id : ''}">
            <legend>
                <h1>Create Portfolio</h1>
            </legend>
            <div class="form-group">
                <button type="submit">Save</button>
            </div>
        </form>
    `;
}
