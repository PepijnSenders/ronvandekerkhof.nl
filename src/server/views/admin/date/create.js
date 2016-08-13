import moment from 'moment';

export function create(options = {}) {
    return html`
        <form method="POST" action="/admin/date/${options.data ? options.data._id : ''}">
            <legend>
                <h1>Create Date</h1>
            </legend>
            <div class="form-group">
                <label for="date">
                    Date
                    <input class="form-control" type="text" name="date" id="date" value="${options.data ? moment(options.data.date).format('YYYY-MM-DD') : ''}">
                </label>
            </div>
            <div class="form-group">
                <label for="name">
                    Name
                    <input class="form-control" type="text" name="name" id="name" value="${options.data ? options.data.name : ''}">
                </label>
            </div>
            <div class="form-group">
                <label for="location">
                    Location
                    <input class="form-control" type="text" name="location" id="location" value="${options.data ? options.data.location : ''}">
                </label>
            </div>
            <div class="form-group">
                <label for="link">
                    Link
                    <input class="form-control" type="text" name="link" id="link" value="${options.data ? options.data.link : ''}">
                </label>
            </div>
            <div class="form-group">
                <button type="submit">Save</button>
            </div>
        </form>
    `;
}
