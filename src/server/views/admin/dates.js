export default function dates(options) {
    return html`
        <h1>Dates</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Updated at
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                ${options.dates.map(date => html`
                    <tr>
                        <td>
                            ${date._id}
                        </td>
                        <td>
                            ${date.date}
                        </td>
                        <td>
                            ${date.name}
                        </td>
                        <td>
                            ${date.updatedAt}
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
