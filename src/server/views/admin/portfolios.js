export default function portfolios(options) {
    return html`
        <h1>Portfolio</h1>
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
                ${options.portfolios.map(portfolio => html`
                    <tr>
                        <td>
                            ${portfolio._id}
                        </td>
                        <td>
                            ${portfolio.updatedAt}
                        </td>
                    </tr>
                `).join('\n')}
            </tbody>
        </table>
    `;
}
