export default function abouts(options) {
    return html`
        <h1>About</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Title
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
                ${options.abouts.map(about => html`
                    <tr>
                        <td>
                            ${about._id}
                        </td>
                        <td>
                            ${about.title}
                        </td>
                        <td>
                            ${about.updatedAt}
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
