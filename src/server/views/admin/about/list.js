export function list(options) {
    return html`
        <h1>About</h1>
        <p>
            <a class="btn" href="/admin/about/create">Add new</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        _id
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Updated At
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                ${options.data.map(record => html`
                    <tr>
                        <td>
                            ${record._id}
                        </td>
                        <td>
                            ${record.title}
                        </td>
                        <td>
                            ${record.updatedAt}
                        </td>
                        <td>
                            <a class="btn" href="/admin/about/edit/${record._id}">Edit</a>
                            <form action="/admin/about/${record._id}" method="DELETE">
                                <button class="btn" type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
