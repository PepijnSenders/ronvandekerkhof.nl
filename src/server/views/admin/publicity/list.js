export function list(options) {
    return html`
        <h1>Publicity</h1>
        <p>
            <a class="btn" href="/admin/publicity/create">Add new</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        _id
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
                            ${record.updatedAt}
                        </td>
                        <td>
                            <a class="btn" href="/admin/publicity/edit/${record._id}">Edit</a>
                            <form action="/admin/publicity/${record._id}" method="DELETE">
                                <button class="btn" type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
