export default function publicities(options) {
    return html`
        <h1>Publicity</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        ID
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
                ${options.publicities.map(publicity => html`
                    <tr>
                        <td>
                            ${publicity._id}
                        </td>
                        <td>
                            ${publicity.updatedAt}
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
