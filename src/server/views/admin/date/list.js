export function list(options) {
    return html`
        <h1>Date</h1>
        <p>
            <a class="btn" href="/admin/date/create">Add new</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        _id
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Name
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
                            ${record.date}
                        </td>
                        <td>
                            ${record.name}
                        </td>
                        <td>
                            ${record.updatedAt}
                        </td>
                        <td>
                            <a class="btn" href="/admin/date/edit/${record._id}">Edit</a>
                            <form action="/admin/date/${record._id}?_method=DELETE" method="POST">
                                <button class="btn" type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
